import axios from "axios";

const request = "package"

export const createPackage = async(packages) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/${request}/createPackage`, packages)
    return response.data
}

export const updatePackage = async(packages) => {
    const response = await axios.get(`${process.env.REACT_APP_JAVA_URL}/${request}/updatePackage`, packages)
    return response.data
}

export const getPackageByPackageId= async(packageId) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/${request}/getOnePackage`, {packageId:packageId})
    return response.data
}

export const deletePackage = async(packageId) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/${request}/deletePackage`, {packageId:packageId})
    return response.data
}

export const getAllPackages = async() => {
    const response = await axios.get(`${process.env.REACT_APP_JAVA_URL}/${request}/getAllPackages`)
    return response.data
}