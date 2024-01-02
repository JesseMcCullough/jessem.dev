import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    if (process.env.NODE_ENV === "development") {
        url = process.env.REACT_APP_DEV_STRAPI_URL + url;
    } else if (process.env.NODE_ENV === "production") {
        url = process.env.REACT_APP_PROD_STRAPI_URL + url;
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url);
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
};

export default useFetch;
