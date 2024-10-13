import { useEffect, useState } from "react";

const useOfferwallApi = (appFetch: Promise<any>) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getOfferwall = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await (await appFetch)("/offerwall", {
                method: "GET",
            });
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError("Error fetching offerwall data");
            console.error("Error fetching offerwall data", err);
        } finally {
            setLoading(false);
        }
    };

    const postOfferwall = async (payload: any) => {
        setLoading(true);
        setError(null);

        try {
            const response = await (await appFetch)("/offerwall", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError("Error posting offerwall data");
            console.error("Error posting offerwall data", err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, getOfferwall, postOfferwall };
};

export default useOfferwallApi;
