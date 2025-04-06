const statAnalysis = (statName, statArray) => {
    
    let getFractionPercentColor = (hits, gamesPlayed) => {
       /*  console.log(hits) */
        let getPercentColor = (pct) => {
            if (pct >= 90) { return '#eb3d3d' }
            else if (pct < 90 && pct >= 80) { return '#eb683d' }
            else if (pct < 80 && pct >= 70) { return '#eb883d' }
            else if (pct < 70 && pct >= 60) { return '#ebab3d' }
            else if (pct < 60 && pct >= 50) {
            return '#b9eb3d'
            }
            else return 'black'
        }
        let fraction = hits ? `${hits}/${gamesPlayed}` : '-'
        let percent = Math.round((hits / gamesPlayed) * 100)
        let color = getPercentColor(percent)
        return {fraction, percent: hits ? `${percent}%` : null, color}
    }


    let statPerGame = statArray.reduce((sum, num) => sum + num, 0) / statArray.length
    let rounded_spg = Math.round(statPerGame) > 0 ? Math.round(statPerGame) : 'zero'
    let gamesPlayed = statArray.length
    let stat_over = statArray.map(game => game >= rounded_spg).filter(Boolean).length
    let stat_over_obj = getFractionPercentColor(stat_over, gamesPlayed)
    let stat_one_less = (rounded_spg - 1) > 0 ? statArray.map(game => game >= (rounded_spg - 1)).filter(Boolean).length : null
    let stat_one_less_obj = getFractionPercentColor(stat_one_less, gamesPlayed)
    let stat_two_less = (rounded_spg - 2) > 0 ? statArray.map(game => game >= (rounded_spg - 2)).filter(Boolean).length : null
    let stat_two_less_obj = getFractionPercentColor(stat_two_less, gamesPlayed)
    let stat_one_more = statArray.map(game => game >= (rounded_spg + 1)).filter(Boolean).length
    let stat_one_more_obj = getFractionPercentColor(stat_one_more, gamesPlayed)
    let stat_two_more = statArray.map(game => game >= (rounded_spg + 2)).filter(Boolean).length
    let stat_two_more_obj = getFractionPercentColor(stat_two_more, gamesPlayed)

    return {
        stat: statName,
        statPerGame: statPerGame.toFixed(2),
        rounded_spg: rounded_spg,
        stat_over: stat_over_obj,
        stat_one_less: stat_one_less_obj,
        stat_two_less: stat_two_less_obj,
        stat_one_more: stat_one_more_obj,
        stat_two_more: stat_two_more_obj
    }
}

module.exports =  statAnalysis