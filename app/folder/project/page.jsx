import React from 'react'
import Form from './components/Form'
import Meny from './meny/page'

const page = () => {
  return (
    <div className='wrapPage'>
      <h1>Project!</h1>
      <Meny />
      <Form />
    </div>
  )
}

export default page
