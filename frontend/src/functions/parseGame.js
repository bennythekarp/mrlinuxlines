import fixLogos from "./fixLogos"

function parseGame(game) {
    console.log(game)
    fixLogos(game.teams.home)
    fixLogos(game.teams.visitors)
    let arena = game.arena.name
    let city = game.arena.city

    let date = game.date.start.split('T')[0]
    /* console.log(date) */
    let hour = parseInt(game.date.start.split('T')[1].split(':')[0])
    let minutes = game.date.start.split('T')[1].split(':')[1]
    let correctedHour = hour > 12 ? hour - 16 : hour + 8
   /*  console.log(city, hour, correctedHour) */
    let time = `${correctedHour}:${minutes}`

    let home = game.teams.home.name
    let homeObj = game.teams.home
    let homeLogo = game.teams.home.logo 
    let away = game.teams.visitors.name 
    let awayObj = game.teams.visitors
    let awayLogo = game.teams.visitors.logo 
    let homeLineScore = game.scores.home.linescore 
    let homeScore = game.scores.home.points 
    let awayLineScore = game.scores.visitors.linescore 
    let awayScore = game.scores.visitors.points 
    let clock = game.status.clock
    let period = game.periods.current
    let gameID = game.id
    
    return {arena, city, date, time, home, homeObj, homeLogo, away, awayObj, awayLogo, homeLineScore, homeScore, awayLineScore, awayScore, clock, period, gameID}
}

export default parseGame