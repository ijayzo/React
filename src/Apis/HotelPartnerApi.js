import axios from "axios";

export const createHotelPartner = async(createHotelRequest) => {
    const response = await axios.post("http://localhost:8080/hotel/new", createHotelRequest)
    return response.data
}

export const getAllHotelPartners = async() => {
    const response = await axios.get("http://localhost:8080/hotel/all")
    return response.data
}

export const getAllHotelPartnersById = async(hotelId) => {
    const response = await axios.get("http://localhost:8080/hotel/all", {hotelId})
    return response.data
}

export const deleteHotel = async(hotelId) => {
    const response = await axios.post("http://localhost:8080/hotel/delete", {hotelId})
    return response.data
}