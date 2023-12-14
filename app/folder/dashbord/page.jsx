import React from 'react'
import useSWR from 'swr'
import {useState, useEffect} from 'react'

const Dashbord = () => {
    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [isLoading, setIsLoading] = useState(true)
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/posts', 
        fetcher
        )

  return (
    <div className='wrapPage'>
      <h1>Dashbord</h1>
    </div>
  )
}

export default Dashbord
