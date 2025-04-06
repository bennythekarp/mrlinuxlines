import axios from 'axios';

const getStatsPerTeamAndSeason = async (id) => {

    const API_URL = process.env.REACT_APP_API_URL
    
    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-stats-team-season`,
        params: {
          team: id,
          season: '2024'
        }
    }
      
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default getStatsPerTeamAndSeason