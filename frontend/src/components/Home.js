import React from 'react'
import { useState, useEffect } from 'react'
// API-calls
import getGamesPerDate from '../API-calls/getGamesPerDate'
import getGamesLive from '../API-calls/getGamesLive'
// functions
import sortGames from '../functions/sortGames'
import getDays from '../functions/getDays'
//css
import StyledHome from '../styles/StyledHome'
// components
import LiveGameBox from './LiveGameBox'
import UpcomingGameBox from './UpcomingGameBox'
import CompletedGameBox from './CompletedGameBox'
import Loading from './Loading'



const Home = () => {

  let { today, yesterday, tomorrow, dayAfterTomorrow, time } = getDays()
  console.log(today, yesterday, tomorrow, dayAfterTomorrow, time)

  const [games, setGames] = useState('')
  const [liveGames, setLiveGames] = useState('')

  useEffect(() => {
    (async () => {
      let games = await getGamesPerDate(today)
      let yesterdaysGames = await getGamesPerDate(yesterday)
      let tomorrowsGames = await getGamesPerDate(tomorrow)
      let dayAfterTomorrowsGames = await getGamesPerDate(dayAfterTomorrow)
      console.log(games, yesterdaysGames, tomorrowsGames, dayAfterTomorrowsGames)
      let gameArray = sortGames(games, yesterdaysGames, tomorrowsGames, dayAfterTomorrowsGames)
      console.log(gameArray)
      setGames(
        {
          upcomingGames: gameArray.upcoming,
          completedGames: gameArray.completed.reverse(),
          liveGames: gameArray.live
        })
      let live = await getGamesLive()
      console.log(live)
      setLiveGames(live)
    })()
    
  }, [])
  
  return (
    <StyledHome>
      {liveGames.length > 0 ?
      < div className="games-displays">
      <h3 className='games-header'>Live Games</h3>
      {liveGames ? liveGames.map(game =>
        <LiveGameBox game={game} />)
        : <Loading />
      }
    </div> : null
}
      <div className="games-displays">
        <h3 className='games-header'>Completed Games</h3>
        {games ? games.completedGames.map(game => 
          <CompletedGameBox game={game} /> )
          : <Loading />
        }
      </div>
      <div className="games-displays upcoming-games-display">
      <h3 className='games-header'>Upcoming Games</h3>
      {games ? games.upcomingGames.map(game =>
          <UpcomingGameBox game={game} /> )
          : <Loading />
      }
      </div>
      
  </StyledHome>
    
  )
}

export default Home