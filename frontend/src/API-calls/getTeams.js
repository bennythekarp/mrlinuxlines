import axios from 'axios';

const getTeams = async (cleanTeams) => {

  const API_URL = process.env.REACT_APP_API_URL

  const options = {
    method: 'GET',
    url: `${API_URL}/api/teams`
  };
      
  try {
    const response = await axios.request(options);
    console.log(response)
    let teams = response.data
    let NBAteams = cleanTeams(teams)
    console.log(NBAteams)
    return NBAteams
  } catch (error) {
          console.error(error);
  }
}
export default getTeams
