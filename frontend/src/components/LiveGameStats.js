import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// API calls
import getGameStatsPerID from '../API-calls/getGameStatsPerID'
// functions
import fixLogos from '../functions/fixLogos'
import setBackgroundColor from '../functions/setBackgroundColor'
// styles
import StyledLiveStats from '../styles/StyledLiveStats'
import StyledHover from '../styles/StyledHover'
// components
import BoxScore from './BoxScore'
import BoxScoreAPIcall from './BoxScoreAPIcall'
import Loading from './Loading'


const LiveGameStats = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    let game = location.state
    console.log(game)
    let gameID = game.id
    console.log(gameID)
    

    let [stats, setStats] = useState('')

    useEffect(() => {
        (async () => {
            let stats = await getGameStatsPerID(gameID)
            console.log(stats)
            setStats(stats)
        })()
    }, [])

    return (
        <StyledLiveStats>
            {game.arena ?
                <BoxScore state={game} /> : <BoxScoreAPIcall state={game} />}
            <div className="table-container">
            <table className='table table-bordered table-responsive special-table-header'>
                <thead className='boldonse-regular'>
                    <tr>
                        <th scope='col'>player</th> 
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
                    {stats ? stats.response.map(player => {
                        console.log(player)
                        let first = player.player.firstname
                        let last = player.player.lastname
                        let name = `${first} ${last}`
                        let id = player.player.id
                        fixLogos(player.team)
                        let color = setBackgroundColor(player.team)
                        console.log(color)
                    return (
                      <tr>
                        <StyledHover   
                            color={color.lightcolor}
                            scope='row'
                            className='live-player-name'
                            onClick={()=>navigate(`/players/${id}/${first}-${last}`)}    
                          >
                            <span className='player-name'>{name}</span>
                            <img src={player.team.logo} alt="" />
                        </StyledHover>
                        <td>{player.points}</td>    
                        <td>{player.totReb}</td>
                        <td>{player.assists}</td>
                        <td>{player.points + player.totReb}</td>
                        <td>{player.points + player.assists}</td>
                        <td>{player.points + player.totReb + player.assists}</td>
                        <td>{player.totReb + player.assists}</td>
                        <td>{player.tpm}</td>
                        <td>{player.steals}</td>
                        <td>{player.blocks}</td>
                        <td>{player.min}</td>
                        </tr>
                )   
                }) : <Loading />}
            </tbody>
        </table>
        </div>    
      </StyledLiveStats>
      
  )
}

export default LiveGameStats