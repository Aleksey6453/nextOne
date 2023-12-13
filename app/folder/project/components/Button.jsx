'use client'

import Link from 'next/link'
import React from 'react'

const Button = ({url, text}) => {
  return (
    <Link href={url}>
      <button className='btn' >
         {text}
      </button>
    </Link>
  )
}

export default Button
