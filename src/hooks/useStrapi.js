import { useEffect, useState } from "react";

export function useStrapi(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(getStrapiUrl("/api" + url));
                const json = await res.json();

                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { loading, error, data };
}

export function getStrapiUrl(url) {
    if (process.env.NODE_ENV === "development") {
        return process.env.REACT_APP_DEV_STRAPI_URL + url;
    } else if (process.env.NODE_ENV === "production") {
        return process.env.REACT_APP_PROD_STRAPI_URL + url;
    }
}
