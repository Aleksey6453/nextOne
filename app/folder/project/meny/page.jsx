'use client'

import React from 'react'
import Link from 'next/link'

// const links = [
//   {
//     id: 1,
//   title: "One",
//   url: "/one"
//   },
//   {
//     id: 2,
//     title: "Two",
//     url: "/two"
//   },
//   {
//     id: 3,
//     title: "Three",
//     url: "/three"
//   },
//   {
//     id: 4,
//     title: "Four",
//     url: "/four"
//   },
// ]

const Meny = () => {
  const links = [
    {
      id: 1,
    title: "One",
    url: "/one"
    },
    {
      id: 2,
      title: "Two",
      url: "/two"
    },
    {
      id: 3,
      title: "Three",
      url: "/three"
    },
    {
      id: 4,
      title: "Four",
      url: "/four"
    },
  ]
  
  return (
    <div>
      <h1>Meny</h1>
        <nav>
          <Link href='/'>HomeApp</Link>
          <div>
            {links.map(link => (
              <Link key={link.id} href={link.url} className='m-10'>{link.title}</Link>
            ))}   
          </div>
        </nav>
       
       
    </div>
  )
}

export default Meny
