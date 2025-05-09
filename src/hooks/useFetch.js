import {useState, useEffect} from 'react';

function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) =>{
                setData(data);
                setLoading(false);
            })
            .catch((error) =>{
                setError(error);
                setLoading(false);
            });
    }, [url]);

  return {data, loading, error};
}

export default useFetch;