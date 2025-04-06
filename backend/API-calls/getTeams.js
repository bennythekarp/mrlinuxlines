const axios = require('axios')

const getTeams = async () => {

  const API_URL = process.env.REACT_APP_API_URL_TEAMS
  const API_HOST = process.env.REACT_APP_API_HOST
  const API_KEY = process.env.REACT_APP_API_KEY

  const options = {
    method: 'GET',
    url: API_URL,
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    }
  };
      
  try {
    const response = await axios.request(options);
    let teams = response.data.response
    return teams
  } catch (error) {
          console.error(error);
  }
}

module.exports = getTeams
