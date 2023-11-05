import React from 'react'
import { MyButton } from './uiKit/MyButton'

const GameField = ({cells}) => {
  return (
    <div className='block'>
      <h1>Game field</h1>
      <div className="gorizontal">
        <MyButton children={'Give up'}/>
        <MyButton children={'Draw'}/>
      </div>
      <div className="grid">
        {cells.map((_, i)=><button key={i} className='cellTwo'></button> )}
      </div>
    </div>
  )
}

export {GameField}
