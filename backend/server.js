const express = require("express")
const cors = require('cors')
require("dotenv").config()

const axios = require("axios")

const app = express()
app.use(cors()) // allow requests from frontend
app.use(express.json()) // parse JSON

// api-call functions
const getAllGames = require('./API-calls/getAllGames')
const getGameDate = require('./API-calls/getGameDate')
const getTeams = require('./API-calls/getTeams')
const getGamesPerDate = require('./API-calls/getGamesPerDate')
const getGamesLive = require('./API-calls/getGamesLive')
const getGameStatsPerID = require('./API-calls/getGameStatsPerID')
const getPlayersPerTeam = require('./API-calls/getPlayersPerTeam')
const getPlayerStats = require('./API-calls/getPlayerStats')
const getGamePerID = require('./API-calls/getGamePerID')

app.get('/api/teams', async (req, res) => {
    let teams = await getTeams()
    res.send(teams)
})
app.get('/api/get-all-games', async (req, res) => {
    let season = req.query.season
    console.log(season)
    let games = await getAllGames(season)
    res.send(games)
})
app.get('/api/get-games-per-date', async (req, res) => {
    let date = req.query.date
    console.log(date)
    let games = await getGamesPerDate(date)
    console.log(games)
    res.send(games)
})
app.get('/api/get-games-live', async (req, res) => {
    let games = await getGamesLive()
    console.log(games)
    res.send(games)
})
app.get('/api/get-game-stats-per-id', async (req, res) => {
    let id = req.query.id
    console.log(id)
    let stats = await getGameStatsPerID(id)
    console.log(stats)
    res.send(stats)
})
app.get('/api/get-game-per-id', async (req, res) => {
    let id = req.query.id
    console.log(id)
    let game = await getGamePerID(id)
    console.log(game)
    res.send(game)
})
app.get('/api/get-players-per-team', async (req, res) => {
    let params = req.query
    console.log(params)
    let players = await getPlayersPerTeam(params)
    console.log(players)
    res.send(players)
})
app.get('/api/get-player-stats', async (req, res) => {
    let params = req.query
    console.log(params)
    let stats = await getPlayerStats(params)
    console.log(stats)
    res.send(stats)
})
app.get('/api/get-game-date', async (req, res) => {
    let id = req.query.id
    let date = await getGameDate(id)
    console.log(date)
    res.send(date)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))