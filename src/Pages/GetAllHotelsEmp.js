import { useEffect, useState } from "react"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { deleteHotel, getAllHotelPartners } from "../Apis/HotelPartnerApi"
import { Form, Button } from 'react-bootstrap';
import { createPackageSignUp } from "../Apis/packageSignUpApi"



export default function GetAllHotelPartnersForEmployee(){
    const[hotels , setHotels] = useState([])
    const update = useLocation().state
    const user = sessionStorage.getItem("user");

   
    useEffect(() => {
        getAllHotelPartners().then(response => {
            setHotels(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleDelete = (hotelId) =>{
        console.log("This is the HotelID" + hotelId)
        const packageSignUp = {packageId:update.packageId, flightId:update.flightId, username:user, hotelId:hotelId}
        createPackageSignUp(packageSignUp).then(response => {
            NotificationManager.success("Successfully Created Package")
        }).catch(error => {
            NotificationManager.error('Error Occurred While Creating Package')
        })
      
    }

    return (
        <div>
    
            <h1>LIST OF ALL HOTELS IN THE COMPANY</h1>

            <Table striped bordered hover>
            <thead>
              <tr>
                  <th>Hotel Name</th>
                  <th>Hotel Location</th>
                  <th> Sign Up</th>
              </tr>
            </thead>

            <tbody>

              <td>
                  {
                      hotels && hotels.length > 0 ? hotels.map(hotel => <div key={hotel.id}>{hotel.hotelName}</div>): ""
                  }
              </td>

              <td>
                  {
                      hotels && hotels.length > 0 ? hotels.map(hotel => <div key={hotel.id}>{hotel.hotelLocation}</div>): ""
                  }
              </td>

    
              <td>
                  {
                      hotels && hotels.length > 0 ? hotels.map(hotel => <div key={hotel.id}><Button variant="primary" size="sm" onClick={()=> {handleDelete(hotel.id)}}>SIGN UP</Button></div>): ""
                  }
              </td>

            </tbody>


            </Table>
        </div>
    )
}