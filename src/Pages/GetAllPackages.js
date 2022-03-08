import { useEffect, useState } from "react"
import { deleteEmployee, getAllEmployee } from "../Apis/employeeApi"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { getAllPackages } from "../Apis/packageApi"
import { Form, Button, Col, Container } from 'react-bootstrap';



export default function GetAllPackages(){
    const[packages , setPackages] = useState([])
    const navigate = useNavigate();
    const update = useLocation().state

   

    useEffect(() => {
        getAllPackages().then(response => {
            setPackages(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleDelete = (employeeId) =>{
        alert("Is This the package you want for your vacation")
        navigate("/flight", {state:{packageId:employeeId}})
    }

    return (
        <div>
    
            <h1>LIST OF ALL PACKAGES IN THE COMPANY</h1>

            <Table striped bordered hover>
            <thead>
              <tr>
                  <th>Package Category</th>
                  <th>Travel Date</th>
                  <th> Travel Destination</th>
                  <th> Status</th>
                  <th> Cost</th>
                  <th> Description</th>
                  <th> Duration</th>
                  <th> Total Sign Up</th>
                  <th> FLIGHTS</th>
              </tr>
            </thead>

            <tbody>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageCategory}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.travelDate}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.travelDestination}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageStatus}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageCost}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageDescription}</div>): ""
                  }
              </td>


              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageDays}</div>): ""
                  }
              </td>

              

             
              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.totalPackageSignUp}</div>): ""
                  }
              </td>

           
             

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}><Button variant="primary" onClick={()=> {handleDelete(packageit.employeePackageId)}}>SELECT FLIGHT</Button></div>): ""
                  }
              </td>

            </tbody>


            </Table>
        </div>
    )
}