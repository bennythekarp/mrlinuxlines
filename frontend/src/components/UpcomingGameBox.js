import React from 'react'
// functions
import fixLogos from '../functions/fixLogos'
import parseGame from '../functions/parseGame'
import conciseDate from '../functions/conciseDate'
// css
import StyledUpcomingGames from '../styles/StyledUpcomingGames'


const UpcomingGameBox = ({ game }) => {
  /*  console.log(game) */
  fixLogos(game.teams.home)
  fixLogos(game.teams.visitors)
  let { arena, city, date, time, home, homeLogo, away, awayLogo, homeLinescore, homeScore, awayLinescore, awayScore, clock, period, gameID } = parseGame(game)
  let shortDate = conciseDate(date)

  return (
    <StyledUpcomingGames key={gameID}>
      <table className='table table-bordered upcoming-game' key={gameID}>
        <tbody>
          <tr>
          <th scope='col' className='upcoming-game-box-logos'>
              <img src={awayLogo} alt="" />
              <span>@</span>
              <img src={homeLogo} alt="" />
            </th>
          <th scope='col' className='upcoming-game-box-city'>
          <h3>{arena}</h3>
          <h4>{city}</h4>
            </th> 
            <th scope='col' className='upcoming-game-box-date'>
              <h3>{shortDate}</h3>    
            </th>
        <th scope='col' className='upcoming-game-box-time'>
          <h3>{time}</h3>
        </th>
        </tr>
      </tbody>
    </table>
  </StyledUpcomingGames>
  )
}

export default UpcomingGameBox