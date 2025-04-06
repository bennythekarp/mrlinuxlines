function sortGamesByDate() {
    let sortedGames = games.response.sort((a, b) => b.date.start - a.date.start)
    console.log(sortedGames)
    return sortedGames
}

export default sortGamesByDate