import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// api-call
import getGamePerID from '../API-calls/getGamePerID'
// functions
import parseGame from '../functions/parseGame'



const BoxScoreAPIcall = ({ state }) => {
    const navigate = useNavigate()
    const [game, setGame] = useState('')
    useEffect(() => {
        (async () => {
          console.log(state)
          let id = state.id
          let game = await getGamePerID(id)
          console.log(game)
            let { arena, city, date, time, home, homeObj, homeLogo, away, awayObj, awayLogo, homeLineScore, homeScore, awayLineScore, awayScore, clock, period, gameID } = parseGame(game)
            setGame({arena, city, date, time, home, homeObj, homeLogo, away, awayObj, awayLogo, homeLineScore, homeScore, awayLineScore, awayScore, clock, period, gameID})
          console.log(homeObj, awayObj, homeLineScore)
        })()
        
      }, []) 
   

    return (
    <>
    {game ?
    <table className='table table-bordered special-table-header'>
        <thead className='boldonse-regular'>
            <tr>
                <th scope='col'>
                    <div>{`${game.arena}, ${game.city}`}</div>
                    <div>{game.date} {game.time}</div>        
                </th>
                <th scope='col'>1</th>
                <th scope='col'>2</th>
                <th scope='col'>3</th>
                <th scope='col'>4</th>
                {game.homeLineScore.length === 5 ?
                <th scope='col'>OT</th> : null} 
                <th scope='col'>total</th>
            </tr>
        </thead>
        <tbody>
            <tr className='boxscore-row'>
                <td className='boxscore-logo'>
                  <img
                    src={game.awayLogo}
                    onClick={() => navigate('/players', { state: game.awayObj })}
                    className="hover-image"
                    alt=""
                  />
                </td>
                {game.awayLineScore ? game.awayLineScore.map(num => <td className='boxscore-quarter'>{num}</td>) : null}
                <td>{game.awayScore}</td>
            </tr>
            <tr className='boxscore-row'>
                <td className='boxscore-logo'>
                  <img
                    src={game.homeLogo}
                    onClick={() => navigate('/players', { state: game.homeObj })}
                    className="hover-image"
                    alt=""
                  />
                </td>
                    {game.homeLineScore ? game.homeLineScore.map(num => <td>{num}</td>) : null}
                <td>{game.homeScore}</td>
            </tr>
        </tbody>
    </table > : <div>no info</div>}  
    </>        
  )
}

export default BoxScoreAPIcall