import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
//API calls
import getPlayersPerTeam from '../API-calls/getPlayersPerTeam'
//functions
import alphabetizeArray from '../functions/alphabetizeArray'
import setBackgroundColor from '../functions/setBackgroundColor'
import parsePlayer from '../functions/parsePlayer'
//css
import StyledPlayers from '../styles/StyledPlayers'
import StyledHover from '../styles/StyledHover'
// components
import Loading from './Loading'




const Players = () => {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)

  // Check if the correct props exist in the state (from previous page)
  useEffect(() => {
    if (!location.state) {
      navigate("/", { replace: true }); // Redirect to home if conditions are not met
    }
  }, [location, navigate]);

    
    const team = location.state
    console.log(team)
    let { id, logo } = team
    let color = setBackgroundColor(team)

    const [players, setPlayers] = useState('')

    const getGamesAndPlayers = async (id) => { 
        const playerArray = await getPlayersPerTeam(id)
        console.log(playerArray)
        alphabetizeArray(playerArray)
        console.log(playerArray)
        setPlayers(playerArray)
    }    
    
  
    useEffect(() => {
        if (players) {
            console.log('players still set')
        } else {
            getGamesAndPlayers(id)
        } 
    }, [])
    
  return (
      <StyledPlayers>
          <header style={{ backgroundColor:`${color.color}`}}>
          <img src={logo} alt="" />  
          </header>
        <div className="table-container"> 
        <table className='table table-bordered special-table-header'>
          <thead className='boldonse-regular'>
            <tr>
              <th scope='col'>player</th>
              <th scope='col'>position</th>
              <th scope='col'>college</th>
              <th scope='col'>height</th>
              <th scope='col'>jersey#</th>
              <th scope='col'>years</th>
            </tr>
          </thead>
          <tbody>
           
          {players ? players.map(player => {
              let {id, first, last, playerName, position, college, height, jersey, years} = parsePlayer(player)
              return (
                <tr className="player-row">
                  <StyledHover
                    color={color.lightcolor}
                    onClick={()=>navigate(`/players/${id}/${first}-${last}`)} 
                  
                  >
                      <span className='player-name hover-filter merriweather'>{playerName}</span>
                  </StyledHover>
                    <td>{position}</td>
                    <td>{college}</td>
                    <td>{height}</td>  
                    <td>{jersey}</td>  
                    <td>{years}</td>  
                </tr>
              )
          })
           : <Loading />}
        </tbody>
      </table>  
      </div>      

      </StyledPlayers>
  )
}

export default Players