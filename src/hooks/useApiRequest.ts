import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import { TApi } from '@/api';

import useApi from '@hooks/useApi.ts';

interface ApiRequestSuccess<T> {
    data: T;
    success: true;
    pending: false;
    error: null;
}

interface ApiRequestPending {
    data: null;
    success: false;
    pending: true;
    error: null;
}

interface ApiRequestError {
    data: null;
    success: false;
    pending: false;
    error: Error;
}

type ApiRequestConfig = {
    skip?: boolean;
    autorun?: boolean;
};

type StrObj = Record<string, unknown>;
type ApiKey = keyof TApi;
type ApiItem<K extends ApiKey> = TApi[K] extends StrObj
    ? keyof TApi[K]
    : never;
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
type ApiFunction<A extends ApiKey, F extends ApiItem<A>> = TApi[A][F] extends (...args: any[]) => Promise<AxiosResponse<any>> ? TApi[A][F] : never;
type Data<A extends ApiKey, F extends ApiItem<A>> = Awaited<ReturnType<ApiFunction<A, F>>>;
export type ApiRequest<T> = ApiRequestSuccess<T> | ApiRequestPending | ApiRequestError;

function useApiRequest<A extends ApiKey, F extends ApiItem<A>>(
    api: A,
    fn: F,
    config: ApiRequestConfig = {
        autorun: true,
        skip: false
    },
    ...params: Parameters<ApiFunction<A, F>>
): ApiRequest<Data<A, F> | null> & {
    request: () => Promise<void>;
} {
    const apiInstance = useApi();
    const reqFn = apiInstance[api][fn] as ApiFunction<A, F>;

    const [data, setData] = useState<ApiRequest<Data<A, F> | null>>(
        {
            data: null,
            success: false,
            pending: true,
            error: null
        }
    );

    const request = useCallback(async () => {
        try {
            const response = await reqFn(...params);
            setData({
                data: response.data,
                success: true,
                pending: false,
                error: null
            });
        }
        catch (error: unknown) {
            if (error instanceof Error) {
                setData({
                    data: null,
                    success: false,
                    pending: false,
                    error: error
                });
            }
            else {
                setData({
                    data: null,
                    success: false,
                    pending: false,
                    error: new Error('An unknown error occurred')
                });
            }
        }
    }, [...params]);

    useEffect(() => {
        if (((typeof config.autorun === 'undefined' || config.autorun) && !config.skip)) {
            request();
        }

        if (config.skip) {
            setData({
                data: null,
                success: false,
                pending: false,
                error: new Error('skipped')
            });
            return;
        }
    }, [request, config.autorun, config.skip]);

    return {
        ...data,
        request
    };
}

export default useApiRequest;
