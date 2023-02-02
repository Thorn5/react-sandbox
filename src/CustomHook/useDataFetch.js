//./CustomHook/useDataFetch.js

import { useState, useEffect } from "react";

// const urlBase = 'https://api.example.com/';
// const queryParams = '?search=';
// const queryString = 'test';

const useDataFetch = (urlBase, queryParams, queryString) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        try {
            fetch(urlBase+queryParams+queryString)
                .then(response => response.json())
                .then(jsonResponse => {
                    setData(jsonResponse);
                    // setData(JSON.parse(jsonResponse));
                    // setLoading(false);
                })
        } catch (err) {
            setError(err);
            // setLoading(false);
        } finally {
            setLoading(false);
        }
        console.log({ data, loading, error });
    }, [data, loading, error]);
    
    return { data, loading, error };
};
export default useDataFetch;