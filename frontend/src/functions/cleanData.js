import fixLogos from "./fixLogos"

const cleanData = async (response, allGames) => {
    console.log(response, allGames)
    let gameStats = response.map(item => {
        return {
            id: item.game.id,
            minutes: item.min,
            points: item.points,
            threes: item.tpm,
            rebounds: item.totReb,
            assists: item.assists,
            steals: item.steals,
            blocks: item.blocks
        }
    })
    let gameIDs = [
        { seasonType: 'preseason', id: 14114, date: '2024-10-19' },
        { seasonType: 'regular season', id: 14115, date: '2024-10-22' }
    ]
    
    let regularSeasonStats = gameStats.filter(game => game.id > gameIDs[0].id)

    let statsWithGameInfo = regularSeasonStats.map(statArray => {
        let [gameInfo] = allGames.filter(game => game.id === statArray.id)
        fixLogos(gameInfo.teams.home)
        fixLogos(gameInfo.teams.visitors)
        return {...statArray, gameInfo}
    })
    console.log(statsWithGameInfo)
    
    
    let playerStatsObj = {
        player: response[0].player,
        team: response[0].team,
        stats: statsWithGameInfo
    }
    return playerStatsObj
}

export default cleanData
