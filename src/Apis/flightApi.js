import axios from "axios";

const request = "flights"

export const getAllFlight = async() => {
    const response = await axios.get(`${process.env.REACT_APP_JAVA_URL}/${request}/getAllFlights`)
    return response.data
}

export const getFromAPI = async(search) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/${request}/getDirectFromAPI`,search)
    return response.data
}

export const getFlights= async(search) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/${request}/getFlights`, search)
    return response.data
}

