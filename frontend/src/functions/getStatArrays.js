const statAnalysis = require('./statAnalysis')

const getStatArrays = (stats) => {

    let gameStats = stats.stats

    let points_array = gameStats.map(game => game.points)
    let points = statAnalysis('points', points_array)
    
    let rebounds_array = gameStats.map(game => game.rebounds)
    let rebounds = statAnalysis('rebounds', rebounds_array)

    let assists_array = gameStats.map(game => game.assists)
    let assists = statAnalysis('assists', assists_array)

    let PR_array = gameStats.map(game => game.points + game.rebounds)
    let PR = statAnalysis('points + rebounds', PR_array)
    
    let PA_array = gameStats.map(game => game.points + game.assists)
    let PA = statAnalysis('points + assists', PA_array)
    
    let PRA_array = gameStats.map(game => game.points + game.rebounds + game.assists)
    let PRA = statAnalysis('points + rebounds + assists', PRA_array)

    let RA_array = gameStats.map(game => game.rebounds + game.assists)
    let RA = statAnalysis('rebounds + assists', RA_array)
    
    let threes_array = gameStats.map(game => game.threes)
    let threes = statAnalysis('threes', threes_array)

    let steals_array = gameStats.map(game => game.steals)
    let steals = statAnalysis('steals', steals_array)

    let blocks_array = gameStats.map(game => game.blocks)
    let blocks = statAnalysis('blocks', blocks_array)

    return [points, rebounds, assists, PR, PA, PRA, RA, threes, steals, blocks]
}

export default getStatArrays


    
    