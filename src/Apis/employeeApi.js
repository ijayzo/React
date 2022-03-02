import axios from "axios";

export const employeeLogin = async(loginRequest) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/auth/login`, loginRequest)
    return response.data
}

export const createEmployee = async(createEmployeeRequest) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/employee/createEmployee`, createEmployeeRequest)
    return response.data
}

export const getAllEmployee = async() => {
    const response = await axios.get(`${process.env.REACT_APP_JAVA_URL}/employee/getAllEmployees`)
    return response.data
}

export const deleteEmployee = async(deleteEmployeeRequest) => {
    const response = await axios.post(`${process.env.REACT_APP_JAVA_URL}/employee/deleteEmployee`, {employeeId:deleteEmployeeRequest})
    return response.data
}