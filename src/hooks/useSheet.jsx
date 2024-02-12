import { useEffect, useState } from 'react';
import { Request } from '../utils/request';

export const useSheet = (sheeid) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

   useEffect(()=>{
     Request(`https://sheets.googleapis.com/v4/spreadsheets/${sheeid}/values/Página1!A:F?key=${import.meta.env.VITE_APP_GOOGLE_SERVICE_PRIVATE_KEY}`)
     .then((data)=>{
        const dataRows = data.values
        data.values.shift()
        
        setData(dataRows)
        setLoading(false)
     })
     .catch((e)=>{
        setError("Houve um problema no servidor, volte mais tarde")
        setLoading(false)
     })

     return ()=>{
         setError(false)
         setData([])
     }
   }, [])

   return {data: data, loading: loading, error: error}

};