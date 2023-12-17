'use client'

import React from 'react'
import useSWR from 'swr'
import {useState, useEffect} from 'react'

const Dashbord = () => {
    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(()=>{
    //   const getData = async() => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //       cache: 'no-store'
    //     });
    //     if(!res.ok){
    //       setError(true)
    //     }
       
    //     const data = await res.json()

    //     setData(data)
    //     setIsLoading(false)
    //   } 
    //   getData()
    // }, [])
    // console.log(data)

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/posts', 
        fetcher
        )

    console.log(data)

  return (
    <div className='wrapPage'>
      <h1>Dashbord</h1>
    </div>
  )
}

export default Dashbord
