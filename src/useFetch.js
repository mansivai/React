
// custom hooks in react needs to start from use
import { cleanup } from '@testing-library/react';
import {useState, useEffect} from 'react';

const useFetch =(url) =>{
    const [data, setData] = useState(null);
    const [isPending , setPending] =useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont= new AbortController();




        // fetch data, rendering data with eash state, dependency array
        setTimeout(() => {
          fetch(url, {signal: abortCont.signal})
            .then(res =>{
               if(!res.ok){
                 throw Error("something went wrong")
               }
              return res.json();
            })
            .then(data =>{
              setError(null);
              setData(data);
              setPending(false);
            })
            .catch(e => {
                if(e.name === 'AbortError'){
                    console.log("fetch aborted")
                }else{
                    setError(e.message);
                    setPending(false);}
            });
        }, 1000);
        // 1_sec
    
        return ()=> abortCont.abort();

      }, [url]);

      return {data, isPending, error};
}

export default useFetch;