import axios from 'axios';

const getGameStatsPerID = async (id) => {

    const API_URL = process.env.REACT_APP_API_URL

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-game-stats-per-id`,
        params: {id: id}
    }
      
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default getGameStatsPerID
