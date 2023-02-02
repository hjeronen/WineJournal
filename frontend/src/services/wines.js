import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : ''

const getAllWines = async props => {
    const response = await axios.get(baseURL + '/api/wines/')
    return response.data
}

const functions = {
    getAllWines
}

export default functions