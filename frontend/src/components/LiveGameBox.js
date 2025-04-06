import React from 'react'
import { useNavigate } from 'react-router-dom'
// functions
import fixLogos from '../functions/fixLogos'
import parseGame from '../functions/parseGame'
import conciseDate from '../functions/conciseDate'
// css
import StyledLiveGameBox from '../styles/StyledLiveGameBox'


const LiveGameBox = ({ game }) => {
   /*  console.log(game) */
    const navigate = useNavigate()

    fixLogos(game.teams.home)
    fixLogos(game.teams.visitors)
    let { arena, city, date, time, home, homeLogo, away, awayLogo, homeLinescore, homeScore, awayLinescore, awayScore, clock, period, gameID } = parseGame(game)
    let shortDate = conciseDate(date)
    let ordinalIndicator
    period === 1 ? ordinalIndicator = 'st' : period === 2 ? ordinalIndicator = 'nd' : period === 3 ? ordinalIndicator = 'rd' : ordinalIndicator = 'th'
    
    return ( 
    <StyledLiveGameBox key={gameID}>
        <table className='table table-bordered' onClick={() => navigate('/game-stats', { state: game })}>
            <thead>
                <tr>
                    <th scope='col' className='live-game-box-header'>
                    <div className='live-game-box-date-time'>
                        <h3>LIVE</h3>
                    </div>        
                    <div className='live-game-box-city'>
                        <h3 className='live-arena'>{arena}</h3>
                        <h4 className='live-city'>{city}</h4>
                    </div>
                    {/* <div className='live-game-box-date-time'>
                        <h3>{shortDate}</h3>
                        <h4 className='time'>{time}</h4>
                    </div>  */}      
                </th>
                <th scope='col'className='score-column'>score</th>
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
        {game.status.halftime ?
            <h2 className='halftime'>HALFTIME</h2>
                    : <div className='game-time'>
                        <h3>{`${period}${ordinalIndicator} period`}</h3>
                        <h4>{time}</h4>
                    </div>}
    </StyledLiveGameBox>
  )
}

export default LiveGameBox