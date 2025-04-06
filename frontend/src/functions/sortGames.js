import sortArray from "./sortArray"

function sortGames(games, yesterdaysGames, tomorrowsGames, dayAfterTomorrowsGames) {
    console.log(games, yesterdaysGames, tomorrowsGames, dayAfterTomorrowsGames)
    let gameArray = games.concat(yesterdaysGames).concat(tomorrowsGames).concat(dayAfterTomorrowsGames)
    console.log(gameArray)
    sortArray(gameArray, "date.start")
    let completedGames = gameArray.filter(game => game.status.long === "Finished")
    let upcomingGames = gameArray.filter(game => game.status.long === "Scheduled")
    let liveGames = gameArray.filter(game => game.status.long === "In Play")
    console.log(completedGames, upcomingGames, liveGames)
    return {completed: completedGames, upcoming: upcomingGames, live: liveGames}
}
export default sortGames