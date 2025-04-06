import axios from 'axios';

const getGamesPerDate = async (date) => {

    const API_URL = process.env.REACT_APP_API_URL
    console.log(API_URL)

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-games-per-date`,
        params: {date: date}
      }
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data
      } catch (error) {
          console.error(error);
      }
}

export default getGamesPerDate
