import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <form className='form'>
      <input type="text" placeholder='please...' className='input' />
      <input type="text" placeholder='please...' className='input' />
      <Button text={'Send'} url={'#'} />
    </form>
  )
}

export default Form
