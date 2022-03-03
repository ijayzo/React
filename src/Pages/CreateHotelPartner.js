
import {useState} from 'react'
import React from "react"
import { NotificationManager } from "react-notifications"
import { Form, Button, Col, Container } from 'react-bootstrap';
import { createHotelPartner } from '../Apis/HotelPartnerApi';




export default function CreateHotelPartner(){
    const[hotel, setHotel] = useState({hotelLocation : '', hotelName:""})

      

    const handleSubmit = (event) => {
      
        event.preventDefault()
          createHotelPartner(hotel).then(response => {
           NotificationManager.success("Succesfully Created Hotel Partner")
          }).catch(error => {
            if(error.response.data){
              NotificationManager.error(error.response.data.message)
            }else{
            NotificationManager.error("Error while Creating HotelPartner")
            }
          })
           console.log(hotel)
         
     }
 
     const handleChange = (event) => {
         const { name, value } = event.target;
        setHotel((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     }

    return(

        <div className="createForm">


<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Hotel Location</Form.Label>
    <Form.Control
    size="sm"
      type="text"
      name="hotelLocation"
      value={hotel.hotelLocation}
      onChange ={handleChange}
       />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Hotel Name</Form.Label>
    <Form.Control
     type="text"
     name="hotelName"
     value={hotel.hotelName}
     onChange ={handleChange}
   
      
       />
   
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        

        </div>
    )
}