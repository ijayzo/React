import { useEffect, useState } from "react"
import { deleteEmployee, getAllEmployee } from "../Apis/employeeApi"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { Form, Button, Col, Container } from 'react-bootstrap';



export default function GetAllEmployee(){
    const[employees , setEmployees] = useState([])
    const update = useLocation().state

   

    useEffect(() => {
        getAllEmployee().then(response => {
            setEmployees(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleDelete = (employeeId) =>{
        deleteEmployee(employeeId).then(response => {
            NotificationManager.success("Successfully Deleted")

        }).catch(error => {
            NotificationManager.error("Error Occured While Deleting")
        })
    }

    return (
        <div>
    
            <h1>LIST OF ALL EMPLOYEE IN THE COMPANY</h1>

            <Table striped bordered hover>
            <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th> EmailAddress</th>
                  <th>Role</th>
                  <th> DELETE</th>
              </tr>
            </thead>

            <tbody>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.firstName}</div>): ""
                  }
              </td>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.lastName}</div>): ""
                  }
              </td>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.email}</div>): ""
                  }
              </td>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}>{employee.role}</div>): ""
                  }
              </td>

              <td>
                  {
                      employees && employees.length > 0 ? employees.map(employee => <div key={employee.employeeId}><Button variant="primary" size ="sm" onClick={()=> {handleDelete(employee.employeeId)}}>DELETE</Button></div>): ""
                  }
              </td>

            </tbody>


            </Table>
        </div>
    )
}