import React from 'react'
import { useNavigate } from 'react-router-dom'
// functions
import conciseDate from '../functions/conciseDate'
import setBackgroundColor from '../functions/setBackgroundColor'
// css
import StyledHover from '../styles/StyledHover'
// components
import Loading from './Loading'

const GameByGameStats = ({ stats }) => {
  console.log(stats) 
  const navigate = useNavigate()

  return (
    <div className="table-container">
    <table className='table table-bordered special-table-header'>
        <thead className="boldonse-regular">
          <tr>
            <th scope='col'>game</th>
            <th scope='col'>points</th>
            <th scope='col'>rebounds</th>
            <th scope='col'>assists</th>
            <th scope='col'>PR</th>
            <th scope='col'>PA</th>
            <th scope='col'>PRA</th>
            <th scope='col'>RA</th>
            <th scope='col'>threes</th>
            <th scope='col'>steals</th>
            <th scope='col'>blocks</th>
            <th scope='col'>minutes</th>
          </tr>
        </thead>
        <tbody>
        {stats ?
          stats.stats.reverse().map(game => {
             
            console.log(game)
            let details = game.gameInfo
            let shortDate = conciseDate(details.date.start.split('T')[0])
            let color = setBackgroundColor(stats.team)
            let opponent = details.teams.home.nickname === stats.team.nickname ? details.teams.visitors : details.teams.home
              return (
              <tr>
                  <StyledHover
                    scope='row'
                    onClick={() => navigate('/game-stats', { state: game })}
                    className='date boldonse-regular'
                    color={color.lightcolor}
                  >
                    <span>{shortDate}</span>
                    <img className='game-by-game-image' src={opponent.logo} alt="" />
                </StyledHover>       
                <td>{game.points}</td>
                <td>{game.rebounds}</td>
                <td>{game.assists}</td>
                <td>{game.points + game.rebounds}</td>
                <td>{game.points + game.assists}</td>
                <td>{game.points + game.rebounds + game.assists}</td>
                <td>{game.rebounds + game.assists}</td>
                <td>{game.threes}</td>
                <td>{game.steals}</td>
                <td>{game.blocks}</td>
                <td>{game.minutes}</td>
              </tr>
              )
            }) : <Loading />}
        </tbody>
      </table>
    </div>
  )
}

export default GameByGameStats