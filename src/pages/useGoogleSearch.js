import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import API_KEY from './key'
//import { useStateValue } from './stateprovider'
const CONTEXT_KEY='ea1bc992764209d7f'

 
function useGoogleSearch(term) {
    //const [state,dispatch] = useStateValue()
    const [data, setdata] = useState(null)
   useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then(result => {
          setdata(result)
        })
    };
    fetchData();
  }, [term])
    return { data }
}

export default useGoogleSearch
