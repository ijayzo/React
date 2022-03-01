import axios from "axios";

export const employeeLogin = async(loginRequest) => {
    const response = await axios.post("http://localhost:8080/auth/login", loginRequest)
    return response.data
}

export const createEmployee = async(createEmployeeRequest) => {
    const response = await axios.post("http://localhost:8080/employee/createEmployee", createEmployeeRequest)
    return response.data
}

export const getAllEmployee = async() => {
    const response = await axios.get("http://localhost:8080/employee/getAllEmployees")
    return response.data
}

export const deleteEmployee = async(deleteEmployeeRequest) => {
    const response = await axios.post("http://localhost:8080/employee/deleteEmployee", {employeeId:deleteEmployeeRequest})
    return response.data
}