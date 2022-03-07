import { useEffect, useState } from "react"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { getAllFlight } from "../Apis/flightApi"
import { Form, Button, Col, Container } from 'react-bootstrap';




export default function GetAllFlights(){
    const[flights , setFlights] = useState([])
    const update = useLocation().state
    const navigate = useNavigate();
 

    useEffect(() => {
        getAllFlight().then(response => {
            setFlights(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleDelete = (flightId) =>{
        alert("Is this the flight you want for Your Holidays")
        navigate("/hotels/getAllEmp", {state:{packageId: update.packageId,flightId:flightId }})
       
    }

    return (
        <div>

          <Button variant ="danger" onClick={()=> navigate("/queryFlights", {state:{packageId:update.packageId}})}> QUERY FOR FLIGHT</Button>
        
    
            <h1>AVAILABLE FLIGHTS</h1>

            <Table >
            <thead>
              <tr>
                  <th>Airline</th>
                  <th>Flight Number</th>
                  <th> Depature date</th>
                  <th> Depature Time</th>
                  <th> Depature Airport</th>
                  <th> Arrival Date</th>
                  <th> Arrival Time</th>
                  <th> Arrival Airport</th>
                  <th>Book Flight </th>
              </tr>
            </thead>

            <tbody>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.dep_carriercode}</div>): ""
                  }
              </td>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.dep_fltnumber}</div>): ""
                  }
              </td>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.dep_fltdate}</div>): ""
                  }
              </td>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.dep_flttime}</div>): ""
                  }
              </td>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.dep_airport}</div>): ""
                  }
              </td>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.arrivalFlightDate}</div>): ""
                  }
              </td>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.arrivalTime}</div>): ""
                  }
              </td>

              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}>{flight.arrivalAirport}</div>): ""
                  }
              </td>

             

    
              <td>
                  {
                      flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}><Button variant="primary" size ="sm" onClick={()=> {handleDelete(flight.flight_id)}}> LETS GO</Button></div>): ""
                  }
              </td>

            </tbody>


            </Table>
        </div>
    )
}