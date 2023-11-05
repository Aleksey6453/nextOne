import React from 'react'

const MyButton = ({children}) => {
  return (
    <button className='btn'>
      {children}
    </button>
  )
}

export { MyButton }
