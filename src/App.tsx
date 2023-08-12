import { useEffect, useState } from 'react'

import BoardComponent from './components/BoardComponent'

import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'

import './App.css'

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [cuurentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board()    
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(cuurentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app">
      <BoardComponent 
        board={board}
        setBoard={setBoard}
        currentPlayer={cuurentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  )
}

export default App
