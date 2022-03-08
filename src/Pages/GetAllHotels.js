import { useEffect, useState } from "react"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { deleteHotel, getAllHotelPartners } from "../Apis/HotelPartnerApi"
import { Form, Button, Col, Container } from 'react-bootstrap';



export default function GetAllHotelPartners(){
    const[hotels , setHotels] = useState([])
    const update = useLocation().state

   

    useEffect(() => {
        getAllHotelPartners().then(response => {
            setHotels(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleDelete = (hotelId) =>{
        deleteHotel(hotelId).then(response => {
            NotificationManager.success("Successfully Deleted")

        }).catch(error => {
            NotificationManager.error("Error Occured While Deleting")
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
                  <th> Delete</th>
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
                      hotels && hotels.length > 0 ? hotels.map(hotel => <div key={hotel.id}><Button variant="primary" size="sm" onClick={()=> {handleDelete(hotel.id)}}>DELETE</Button></div>): ""
                  }
              </td>

            </tbody>


            </Table>
        </div>
    )
}