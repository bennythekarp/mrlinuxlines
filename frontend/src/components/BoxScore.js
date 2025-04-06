import React from 'react'
import { useNavigate } from 'react-router-dom'
import parseGame from '../functions/parseGame'


const BoxScore = ({ state }) => {
    console.log(state)
    const navigate = useNavigate()
    let { arena, city, date, time, home, homeObj, homeLogo, away, awayObj, awayLogo, homeLineScore, homeScore, awayLineScore, awayScore, clock, period, gameID } = parseGame(state)
    console.log(homeLineScore.length)

  return (
    <table className='table table-bordered special-table-header'>
        <thead className='boldonse-regular'>
            <tr>
                <th scope='col'>
                    <div>{`${arena}, ${city}`}</div>
                    <div>{date} {time}</div>        
                </th>
                <th scope='col'>1</th>
                <th scope='col'>2</th>
                <th scope='col'>3</th>
                <th scope='col'>4</th>
                {homeLineScore.length === 5 ?
                <th scope='col'>OT</th> : null} 
                <th scope='col'>total</th>
            </tr>
        </thead>
        <tbody>
            <tr className='boxscore-row'>
                <td className='boxscore-logo'>
                    <img
                      src={awayLogo}
                      onClick={() => navigate('/players', { state: awayObj })}
                      className="hover-image"
                      alt=""
                    />
                </td>
                {awayLineScore ? awayLineScore.map(num => <td className='boxscore-quarter'>{num}</td>) : null}
                <td>{awayScore}</td>
            </tr>
            <tr className='boxscore-row'>
                <td className='boxscore-logo'>
                    <img
                      src={homeLogo}
                      onClick={() => navigate('/players', { state: homeObj })}
                      className="hover-image"
                      alt=""
                    />
                </td>
                    {homeLineScore ? homeLineScore.map(num => <td>{num}</td>) : null}
                <td>{homeScore}</td>
            </tr>
        </tbody>
    </table>        
  )
}

export default BoxScore