import Link from 'next/link'
import React from 'react'

async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 3600 }} )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   

const Blog = async() => {
    const data = await getData()
  return (
    <div>
      <h1>New Blog</h1>
      {
        data.map((item) => (
         <Link href='blog/test' key={item.id}>
            {item.title} 
         </Link>
        ))
      }
    </div>
  )
}

export default Blog
