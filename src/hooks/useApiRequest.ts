// import { TApi } from '@/api';
//
// import useApi from '@hooks/useApi.ts';

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

// type ApiRequestConfig = {
//     skip?: boolean;
//     autorun?: boolean;
// };

export type ApiRequest<T> = ApiRequestSuccess<T> | ApiRequestPending | ApiRequestError;

function useApiRequest(
    // schema: T,
    // ...params: Parameters<T>
) {
    // const api = useApi();
    //
    // const options: Required<ApiRequestConfig> = {
    //     skip: false,
    //     autorun: true,
    //     ...params
    // };
}

export default useApiRequest;
