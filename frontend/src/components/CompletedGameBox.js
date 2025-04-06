import React from 'react'
import { useNavigate } from 'react-router-dom'
// functions
import fixLogos from '../functions/fixLogos'
import parseGame from '../functions/parseGame'
import conciseDate from '../functions/conciseDate'
// css
import StyledLiveGameBox from '../styles/StyledLiveGameBox'

const CompletedGameBox = ({game}) => {
   /*  console.log(game) */
    const navigate = useNavigate()

    fixLogos(game.teams.home)
    fixLogos(game.teams.visitors)
    let { arena, city, date, time, home, homeLogo, away, awayLogo, homeLinescore, homeScore, awayLinescore, awayScore, clock, period, gameID } = parseGame(game)
    let shortDate = conciseDate(date)
    
    return (
        <StyledLiveGameBox key={gameID}>
            <table className='table table-bordered' onClick={() => navigate('/game-stats', { state: game})}>
            <thead>
                <tr>
                <th scope='col' className='completed-game-box-header'>
                <div className='completed-game-box-date-time'>
                        <h3>{shortDate}</h3>
                        {/* <h4 className='time'>{time}</h4> */}
                </div>        
                <div className='completed-game-box-city'>
                    <h3 className='completed-arena'>{arena}</h3>
                    <h4>{city}</h4>
                </div>
                    
                </th>
                <th scope='col' className='score-column'>score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='game-box-logo'><img src={awayLogo} alt="" /></td>
                    <td className='game-box-score'>{awayScore}</td>
                </tr>
                <tr>
                    <td className='game-box-logo'><img src={homeLogo} alt="" /></td>
                    <td className='game-box-score'>{homeScore}</td>
                </tr>
            </tbody>
        </table>
    </StyledLiveGameBox>
  )
}

export default CompletedGameBox