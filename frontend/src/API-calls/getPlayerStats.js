import axios from 'axios';

const getPlayerStats = async (id) => { 

  const API_URL = process.env.REACT_APP_API_URL

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-player-stats`,
        params: {
          id: id,
          season: '2024'
        }
    }
    try {
      let rawData = await axios.request(options);
      console.log(rawData)
      let response = rawData.data
        return response
    } catch (error) {
        console.error(error);
    }    
}

export default getPlayerStats