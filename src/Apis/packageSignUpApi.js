import axios from "axios";

const request = "packageSignUp"

export const createPackageSignUp = async(packageSignUp) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/packageSignUp/create`, packageSignUp)
    return response.data
}

export const getPackageSignUpByPackageId = async(packageId) => {
    const response = await axios.get(`${process.env.REACT_APP_JAVA_URL}/packageSignUp/getPackageByPackageId`, {packageId:packageId})
    return response.data
}

export const getPackageSignUpByUserName= async(packageSignUpEmployeeIdRequest) => {
    console.log(packageSignUpEmployeeIdRequest)
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/packageSignUp/getPackageByEmployeeId`, packageSignUpEmployeeIdRequest)
    return response.data
}

export const deletePackageSignUp = async(packageId) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/${request}/deletePackageSignUp`, {packageId:packageId})
    return response.data
}