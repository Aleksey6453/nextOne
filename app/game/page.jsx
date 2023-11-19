"use client"


import React from 'react'
import { useState } from 'react';
import styles from './Game.module.css'
import {GameBtnStart} from './gameComponents/GameBtnStart'
import {MyButton} from './gameComponents/uiKit/MyButton'
import { GameField } from './gameComponents/GameField'
import { GameInfo } from './gameComponents/GameInfo';

export const metadata = {
    title: 'Its game',
    description: 'Add new game',
}



const symbolX = 'X'
const symbolO = 'O'

const gameSymbols = {
    zero: 'zero',
    cross: 'cross',
    triangle: 'triangle',
    square: 'square'
}

const computeWinner = (cells) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++){
        const[a, b, c] = lines[i];
        if (
            cells[a] &&
            cells[a] === cells[b] &&
            cells[a] === cells[c]
        ) {
            return [a, b, c]
        }
    }
}
const moveOrder = [
    gameSymbols.cross,
    gameSymbols.zero,
    gameSymbols.triangle,
    gameSymbols.square
]
    



function getNextMove(currentStep){
    const nextMoveIndex = moveOrder.indexOf(currentStep) + 1
    return moveOrder[nextMoveIndex] ?? moveOrder[0];
}

export default function Game(){

    const startPosition = Array(9).fill(null)
    // const [cells, setCells] = React.useState([null, null, null, null, null, null, null, null, null])
    const [cells, setCells] = useState(() => startPosition)
    const [currentStep, setCurrentStep] = useState(symbolX)
    const nextMove = getNextMove(currentStep)
    const [winnerCombi, setWinnerCombi] = useState()
    // const currentStep = symbolX;
    const getSymbolClassName = (symbol) => {
        if(symbol === symbolX) return 'symbolX'
        if(symbol === symbolO) return 'symbolO'
        return ''
    }

    const renderSymbol = (symbol) => <span className={`symbol ${getSymbolClassName(symbol)}`}> {symbol} </span>

    const winnerSymbol = winnerCombi ? cells[winnerCombi[0]] : undefined;
    const isDraw = !winnerCombi && cells.filter(value => value).length === 9

    console.log(cells)
    const handleCellClick = (index) => {
        console.log(index+1)
        if(cells[index] || winnerCombi) {
            return
        }
        const cellsCopy = cells.slice()
        cellsCopy[index] = currentStep;
        const winner = computeWinner(cellsCopy);
        
        setCells(cellsCopy)
        setCurrentStep(currentStep === symbolX ? symbolO : symbolX)
        setWinnerCombi(winner)
        // handleDraw()
        // draw() ? alert('Draw') : console.log('')
    }
    const handleReebot = () => {
        setCells(startPosition)
        setCurrentStep(symbolX)
        setWinnerCombi(undefined)
    }

    

  return (
    <div className='game wrapPage'>
        {/* <GameBtnStart /> */}
        <MyButton children = {'Start Game'} />
       
        {/* <div className='gameInfo block'>
            {isDraw ? 'Is Draw' : winnerCombi ? 'Winner: ' : 'Step: '}
            {!isDraw && renderSymbol(winnerSymbol ?? currentStep)}
        </div> */}
        <GameInfo currentStep={currentStep} 
                  nextMove={nextMove} 
                  winnerCombi={winnerCombi}
                  renderSymbol={renderSymbol}
                  winnerSymbol={winnerSymbol}
                  />
        {/* <GameField cells={cells}/> */}
      
        {/* <GameInfo isDraw={isDraw} /> */}
        <div className={styles.gameField}>
            {cells.map((symbol, index) => {
                const isWinner = winnerCombi?.includes(index)
                return(
                    <button key={index} 
                            onClick={()=>handleCellClick(index)} 
                            className={`cell ${isWinner ? `cellWin` : ''}`}
                            >
                                {symbol ? renderSymbol(symbol) : null} 
                    </button>
                )
            })}  
        </div>
        <button onClick={handleReebot} className='btn'>Reebot</button>
     
    </div>
  )
   
}







