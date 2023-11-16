import React from 'react'

const GameInfo = ({isDraw, currentStep, nextMove, winnerCombi, renderSymbol, winnerSymbol}) => {
  return (
    <div className='gameInfo'>
        {isDraw ? 'Is Draw' : winnerCombi ? 'Winner: ' : 'Step: '}
        {!isDraw && renderSymbol(winnerSymbol ?? currentStep)}
    </div>
  )
}

export {GameInfo}
