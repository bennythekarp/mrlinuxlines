import axios from 'axios';

const getAllGames = async (id) => { 

  const API_URL = process.env.REACT_APP_API_URL

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-all-games`,
        params: {
          season: '2024'
        }
    }

    try {
      let response = await axios.request(options);
      console.log(response)
      let games = response.data
      return games
    } catch (error) {
        console.error(error);
    }    
}

export default getAllGames