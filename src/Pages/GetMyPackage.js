import { useEffect, useState } from "react"
import { deleteEmployee, getAllEmployee } from "../Apis/employeeApi"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { getAllPackages } from "../Apis/packageApi"
import { Form, Button, Col, Container } from 'react-bootstrap';
import { getPackageSignUpByUserName } from "../Apis/packageSignUpApi"



export default function GetMyPackages(){
    const[packages , setPackages] = useState([])
    const navigate = useNavigate();
    const update = useLocation().state
    const username = sessionStorage.getItem("user")
    const usernames = {username:username}

   

    useEffect(() => {
      getPackageSignUpByUserName(usernames).then(response => {
         setPackages(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleDelete = (employeeId) =>{
        alert("Is This the package you want for your vacation")
        //navigate("/flight", {state:{packageId:employeeId}})
    }

    const handlePackage = (packageId) => {
        navigate("/displayPackage", {state:{packageId:packageId}})

    }


    const handleHotel = (hotelId) => {
        navigate("/displayHotel", {state:{hotelId:hotelId}})

    }


    const handleFlight = (packageId) => {
        navigate("/displayPackage", {state:{packageId:packageId}})

    }

    return (
        <div>
    
            <h1>LIST OF ALL PACKAGES IN THE COMPANY</h1>

            <Table  >
            <thead>
              <tr>
                  <th>Username</th>
                  <th>Package ID</th>
                  <th> Hotel ID</th>
                  <th> Flight ID</th>
                  <th> SignUp Date</th>
                  <th> DELETE</th>
              </tr>
            </thead>

            <tbody>
              

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}>{packageit.username}</div>): ""
                  }
              </td>
            
                
            
              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}><Button size="sm" onClick={()=> handlePackage(packageit.packageId)}>Package</Button></div>): ""
                  }
              </td>
         

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}><Button size="sm" onClick={()=> handleHotel(packageit.hotelId)}>Hotel</Button></div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}><Button size="sm" onClick={()=> handlePackage(packageit.flightId)}>Flight</Button></div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}>{packageit.signUpDate}</div>): ""
                  }
              </td>
           
             

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}><Button variant="danger" size="sm" onClick={()=> {handleDelete(packageit.employeePackageId)}}>DELETE RESERVATION</Button></div>): ""
                  }
              </td>
            
            
             

            </tbody>


            </Table>
        </div>
    )
}