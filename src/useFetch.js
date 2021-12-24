import { useState, useEffect } from 'react';

const useFetch= (url)=>{

    const [ispending, setispending] = useState(true);
    const [error, seterror] = useState(null);
    const [data, setdata] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res=>{
            if(!res.ok)
            {
                throw Error('Could not fetch data :(' );
            }
            return res.json();
        })
        .then(data=>{
            setdata(data);
            setispending(false);
            seterror(null);
        })
        .catch(err=>{
            if(err.name === 'AbortError')
            {
                console.log('fetchedAbort');
            }
            setispending(false);
            seterror(err.message);
        })

        return ()  => abortCont.abort();
    },[url]);

    return {ispending, error, data}
}

export default useFetch;