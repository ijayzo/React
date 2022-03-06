import { useEffect, useState } from "react"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { deleteHotel, getAllHotelPartners, getAllHotelPartnersById } from "../Apis/HotelPartnerApi"



export default function DisplayAllHotel(){
    const[hotels , setHotels] = useState([])
    const update = useLocation().state
    console.log(update)

   

    useEffect(() => {
       getAllHotelPartnersById(update.hotelId).then(response => {
            console.log(response)

            setHotels([response])
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return (
        <div>
    
            <h1>LIST OF ALL HOTELS IN THE COMPANY</h1>

            <Table striped bordered hover>
            <thead>
              <tr>
                  <th>Hotel Name</th>
                  <th>Hotel Location</th>
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

    
            </tbody>


            </Table>
        </div>
    )
}