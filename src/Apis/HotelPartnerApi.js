import axios from "axios";

export const createHotelPartner = async(createHotelRequest) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/hotel/new`, createHotelRequest)
    return response.data
}

export const getAllHotelPartners = async() => {
    const response = await axios.get(`${process.env.REACT_APP_JAVA_URL}/hotel/all`)
    return response.data
}

export const getAllHotelPartnersById = async(hotelId) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/hotel/get`, {hotelId})
    return response.data
}

export const deleteHotel = async(hotelId) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/hotel/delete`, {hotelPartnerId:hotelId})
    return response.data
}