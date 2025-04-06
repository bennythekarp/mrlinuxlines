const axios = require('axios')

const getGameDate = async (id) => {

    const API_URL = process.env.REACT_APP_API_URL_GAMES
    const API_HOST = process.env.REACT_APP_API_HOST
    const API_KEY = process.env.REACT_APP_API_KEY
    
    const options = {
        method: 'GET',
        url: API_URL,
        params: {id: id},
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST
        }
    }
    try {
        const response = await axios.request(options);
        console.log(response.data)
        let date = response.data.response[0].date.start.split('T')[0]
        return date
    } catch (error) {
        console.error(error);
    }
}
module.exports = getGameDate