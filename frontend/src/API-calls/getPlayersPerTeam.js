import axios from 'axios'

const getPlayersPerTeam = async (id) => {

  const API_URL = process.env.REACT_APP_API_URL

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-players-per-team`,
        params: {
          team: id,
          season: '2024'
        }
      }
      
      try {
          const response = await axios.request(options);
          console.log(response.data)
          let players = response.data
          return players
      } catch (error) {
          console.error(error);
      }
}
export default getPlayersPerTeam
