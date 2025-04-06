import axios from 'axios';

const getGamesPerTeam = async (id) => {

    const API_URL = process.env.REACT_APP_API_URL

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-games-per-team`,
        params: {
          season: '2024',
          team: id
        }
    }
      
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default getGamesPerTeam
