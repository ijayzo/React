
import {useState, useEffect} from 'react'
import React from "react"
import { NotificationManager } from "react-notifications"
import { Form, Button, Col, Container } from 'react-bootstrap';
import { getFlights, getFromAPI } from '../Apis/flightApi';
import Table from 'react-bootstrap/Table'





export default function QueryFlight(){
    const [search, setSearch] = useState({to:"", from:""})
    const[flights , setFlights] = useState([])



    useEffect(() => {
      
    }, [])

 


    const handleSubmit = (event) => {
        event.preventDefault()
          getFlights(search).then(response => {
              console.log(response)
          setFlights(response)
          }).catch(error => {
            if(error.response.data){
              NotificationManager.error(error.response.data.message)
            }else{
            NotificationManager.error("Error while Creating HotelPartner")
            }
          })
         
         
     }
 
     const handleChange = (event) => {
        const { name, value } = event.target;
       setSearch((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }

 
    const handleDelete = (hotelId) =>{
        alert("Is this the flight you want for Your Holidays")
        console.log(hotelId)
       
    }

    return(

        <div className="createForm">


<Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Depature Location</Form.Label>
    <Form.Control
    size="sm"
      type="text"
      name="from"
      value={search.from}
      onChange ={handleChange}
       />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Arrival Location</Form.Label>
    <Form.Control
     type="text"
     name="to"
     value={search.to}
     onChange ={handleChange}
   
      
       />
   
  </Form.Group>


  <Button variant="primary" type="submit">
    SEARCH
  </Button>

            </Form>



            <h1>LIST OF ALL HOTELS IN THE COMPANY</h1>

<Table striped bordered hover>
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
      <th>GO </th>
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
          flights && flights.length > 0 ? flights.map(flight => <div key={flight.id}><Button variant="primary" onClick={()=> {handleDelete(flight.flight_id)}}> LETS GO</Button></div>): ""
      }
  </td>

</tbody>


</Table>
        

        </div>
    )
}