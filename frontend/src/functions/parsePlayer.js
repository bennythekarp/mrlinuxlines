function parsePlayer(player) {
    console.log(player)
    let id = player.id
    let first = player.firstname
    if (first.includes(' ')) {
        first.split(' ').join('')
    }
    let last = player.lastname
    if (last.includes(' ')) {
    last = last.split(' ').join('')
    }
    let playerName = `${last}, ${first}`
    let position = player.leagues.standard ? player.leagues.standard.pos : player.leagues.Standard.pos
    let college = player.college
    let feet = player.height.feets || '6'
    let inches = player.height.inches || '0'
    let height = feet + "'" + inches
    let jersey = player.leagues.standard ? player.leagues.standard.jersey : player.leagues.Standard.jersey
    let years = player.nba.pro
    return {id, first, last, playerName, position, college, height, jersey, years}
}

export default parsePlayer