import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
/// API calls
import getPlayerStats from "../API-calls/getPlayerStats"
import getAllGames from "../API-calls/getAllGames"
// functions
import cleanData from '../functions/cleanData'
import getStatArrays from '../functions/getStatArrays'
import fixLogos from "../functions/fixLogos"
import parseStats from "../functions/parseStats"
// css
import StyledStats from "../styles/StyledStats"
// components
import GameByGameStats from "./GameByGameStats"
import Loading from "./Loading"




const Stats = () => {
 
  const navigate = useNavigate()
  const { id } = useParams()

  const [allGames, setAllGames] = useState('')
  const [stats, setStats] = useState('')
  const [statAverages, setStatAverages] = useState('')

  useEffect(() => {
    (async () => {
      let statsArray = await getPlayerStats(id)
      console.log(statsArray)
      let allGames = await getAllGames()
      console.log(allGames)
      setAllGames(allGames)
      let cleanStats = await cleanData(statsArray, allGames)
      console.log(cleanStats)
      fixLogos(cleanStats.team)
      setStats(cleanStats)
      let statArrays = getStatArrays(cleanStats)
      console.log(statArrays)
      setStatAverages(statArrays)
    })()
  }, [])
  
  return (
    <StyledStats>
      <header>
        <div>
          <h2 className="merriweather">{stats ? `${stats.player.firstname} ${stats.player.lastname}` : ''}</h2>
        </div>
       <div>
          <img
            src={stats ? stats.team.logo : ''}
            onClick={() => navigate('/players', { state: stats.team })}
            className="hover-image"
            alt="" />
        </div>
      </header>
      <div className="stat-averages table-container">
        <table className='table table-bordered special-table-header'>
          <thead className='boldonse-regular'>
            <tr>
              <th scope='col'>stat</th>
              <th scope='col'>avg</th>
              <th scope='col' className="smaller">actual</th>
              <th scope='col'>hit</th>
              <th scope='col'>under-1</th>
              <th scope='col'>under-2</th>
              <th scope='col'>over+1</th>
              <th scope='col'>over+2</th>
            </tr>
          </thead>
          <tbody>
            {statAverages ?
              statAverages.map(stat => {
                let { over_fraction, over_color, over_percent, oneLess_fraction, oneLess_color, oneLess_percent, twoLess_fraction, twoLess_color, twoLess_percent, oneMore_fraction, oneMore_color, oneMore_percent, twoMore_fraction, twoMore_color, twoMore_percent } = parseStats(stat)

                return (
                  <tr>
                    <th scope='row'>{stat.stat}</th>
                    <td className="merriweather">{stat.rounded_spg}</td>
                    <td className="spg smaller">{stat.statPerGame}</td>
                    <td>
                      <div>
                        <span className="fraction smaller">{over_fraction}</span>
                        <span className='pct' style={{ color: over_color }}>{over_percent}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="fraction smaller">{oneLess_fraction}</span>
                        <span className="pct" style={{ color: oneLess_color }}>{oneLess_percent}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="fraction smaller">{twoLess_fraction}</span>
                        <span className="pct" style={{ color: twoLess_color }}>{twoLess_percent}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="fraction smaller">{oneMore_fraction}</span>
                        <span className="pct" style={{ color: oneMore_color }}>{oneMore_percent}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="fraction smaller">{twoMore_fraction}</span>
                        <span className="pct" style={{ color: twoMore_color }}>{twoMore_percent}</span>
                      </div>
                    </td>
                  </tr>
                )
              }) : <Loading />
            }
          </tbody>
        </table>
      </div>  

      <GameByGameStats stats={stats} />
      
    </StyledStats>
  )
}

export default Stats