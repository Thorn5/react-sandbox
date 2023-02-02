//./CustomHook/useDataFetch.js

import { useState, useEffect } from "react";

const useDataFetch = (fullUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        try {
            fetch(fullUrl)
            .then(response => response.json())
            .then(jsonResponse => {
                    setData(jsonResponse);
                    // console.log(data);
                    // console.log(data.data[0].fact);
                })
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [fullUrl]);
    
    return { data, loading, error };
};
export default useDataFetch;