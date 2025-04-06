import React from 'react'

const GameHeader = () => {
  return (
    <header>
        <div>
            <img src={away.logo}/>
            <h2>{away.team}</h2>
            <h3>{away.score}</h3>
        </div>
        <div>
            <img src={home.logo}/>
            <h2>{home.team}</h2>
            <h3>{home.score}</h3>
        </div>
    </header>
  )
}

export default GameHeader