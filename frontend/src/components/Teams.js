import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// api-calls
import getTeams from '../API-calls/getTeams'
// functions
import cleanTeams from '../functions/cleanTeams'
// styles
import StyledTeams from '../styles/StyledTeams'
// components
import Loading from './Loading'

const Teams = () => {
    console.log('teams page')
    const navigate = useNavigate()

    const [teams, setTeams] = useState()

    useEffect(() => {
        (async () => {
            let teams = await getTeams(cleanTeams)
            console.log(teams)
            setTeams(teams)
          })()
    }, [])
    

    return (
        <StyledTeams>
            {teams ? teams.map(team => { 
                console.log(team)
                let logo = team.logo
                let id = team.id
                return (
                    <div
                        className='team hover-image'
                        id={id}
                        key={id}
                        onClick={() => navigate('/players', { state: team })}
                        style={{
                            background: `url(${logo}) no-repeat center`,
                            backgroundSize: 'contain'
                        }}
                    ></div>
                )
            }): <Loading />}
        </StyledTeams> 
    )
}

export default Teams