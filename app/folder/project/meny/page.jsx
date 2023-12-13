'use client'

import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'

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
      title: "Testfolder",
      url: "/testfolder"
    },
  ]
  
  return (
    <div>
      <h1>Meny</h1>
        <nav className='gorizontal'>
          <Link href='/'>HomeApp</Link>
          <div>
            {links.map(link => (
              <Link key={link.id} href={link.url} className='m-10'>{link.title}</Link>
            ))}   
          </div>
          {/* <button className="btn" onClick={()=> console.log('LogOut')}>Logout</button> */}
          <Button className='m-10' text={'Logout'} url={'/'}/>
          
        </nav>
       
       
    </div>
  )
}

export default Meny
