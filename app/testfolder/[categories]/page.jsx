import React from 'react'

const Category = ({params}) => {
    console.log(params)
  return (
    <div className='wrapPage'>
      <h1>Category</h1>
      <h2>{params.category}</h2>
    </div>
  )
}

export default Category
