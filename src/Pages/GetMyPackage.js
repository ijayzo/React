import { useEffect, useState } from "react"
import { deleteEmployee, getAllEmployee } from "../Apis/employeeApi"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { getAllPackages } from "../Apis/packageApi"
import { Form, Button, Col, Container } from 'react-bootstrap';
import { deletePackageSignUp, getPackageSignUpByUserName } from "../Apis/packageSignUpApi"



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

    const handleDelete = (packageSignUpId) =>{
        alert("Do you want to cancel your Reservation")
       deletePackageSignUp(packageSignUpId).then(response => {
           NotificationManager.success("Reservation Successfully Deleted")
           navigate("/mypackages")
       }).catch(error => {
           NotificationManager.error("Error While Deleting Reservation")
       })
    }

    const handlePackage = (packageId) => {
        navigate("/displayPackage", {state:{packageId:packageId}})

    }


    const handleHotel = (hotelId) => {
        navigate("/displayHotel", {state:{hotelId:hotelId}})

    }


    const handleFlight = (flightId) => {
        navigate("/displayFlight", {state:{flightId:flightId}})

    }

    return (
        <div>
    
            <h1>LIST OF ALL PACKAGES IN THE COMPANY</h1>

            <Table>
            <thead>
              <tr>
                  <th>Username</th>
                  <th>Package ID</th>
                  <th> Hotel ID</th>
                  <th> Flight ID</th>
                  <th> SignUp Date</th>
                  <th> Delete Reservation</th>
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
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}><Button size="sm" onClick={()=> handleFlight(packageit.flightId)}>Flight</Button></div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}>{packageit.signUpDate}</div>): ""
                  }
              </td>
           
             

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.packageSignUpId}><Button variant="danger" size="sm" onClick={()=> {handleDelete(packageit.packageSignUpId)}}>DELETE RESERVATION</Button></div>): ""
                  }
              </td>
            
            
             

            </tbody>


            </Table>
        </div>
    )
}