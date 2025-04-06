import axios from 'axios'

const getGameDate = async (id) => {

    const API_URL = process.env.REACT_APP_API_URL

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-game-date`,
        params: {id: id}
    }
    
    try {
        const response = await axios.request(options);
        console.log(response.data)
        let date = response.data
        return date
    } catch (error) {
        console.error(error);
    }
}
export default getGameDate