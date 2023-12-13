import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div>
      <h1>Choose the galery!</h1>
      <Image src={'/one.jpg'} className='ilustration' alt='il'/>
      <Image src={'/two.jpg'} className='ilustration' alt='il'/>
      <Image src={'/three.jpg'} className='ilustration' alt='il'/>
      <Link href={'portfolio/ilustrations'}>
        <span>Ilustrations</span>
      </Link>
    </div>
  )
}

export default Portfolio
