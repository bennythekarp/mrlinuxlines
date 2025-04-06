import axios from 'axios'

const getGamePerID = async (id) => {

    const API_URL = process.env.REACT_APP_API_URL

    const options = {
        method: 'GET',
        url: `${API_URL}/api/get-game-per-id`,
        params: {id: id}
    }

    try {
        const response = await axios.request(options);
        console.log(response.data)
        let game = response.data
        return game
    } catch (error) {
        console.error(error);
    }
}

export default getGamePerID


