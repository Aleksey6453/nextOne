import React from 'react'

const GameInfo = ({isDraw}) => {
  return (
    <div className='gameInfo'>
        {isDraw ? 'Is Draw' : winnerCombi ? 'Winner: ' : 'Step: '}
        {!isDraw && renderSymbol(winnerSymbol ?? currentStep)}
    </div>
  )
}

export {GameInfo}
