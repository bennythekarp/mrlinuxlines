import axios from 'axios'

const getGamesLive = async () => {

    const API_URL = process.env.REACT_APP_API_URL

    const options = {
      method: 'GET',
      url: `${API_URL}/api/get-games-live`
    }
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default getGamesLive