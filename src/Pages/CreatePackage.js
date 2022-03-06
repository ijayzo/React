import { createEmployee } from '../Apis/employeeApi';
import {useState} from 'react'
import React from "react"
import { NotificationManager } from "react-notifications"
import { Form, Button, Col, Container } from 'react-bootstrap';
import { getFromAPI } from '../Apis/flightApi';
import { createPackage } from '../Apis/packageApi';

export default function CreatePackage(){

    const[packages, setPackage] = useState({packageCategory:"", travelDate:"", travelDestination:"",packageDays:"", packageStatus:"", packageCost:"", packageDescription:"" , totalPackageSignUp:""})

      

    const handleSubmit = (event) => {
      console.log(packages)
      
        event.preventDefault()
          createPackage(packages).then(response => {
           NotificationManager.success("Succesfully Created Package")
         
          }).catch(error => {
            if(error.response.data){
              NotificationManager.error(error.response.data.message)
            }else{
            NotificationManager.error("Error while Creating Package")
            }
          })
         
         
     }
 
     const handleChange = (event) => {
         const { name, value } = event.target;
        setPackage((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     }

    return(

        <div className="createForm">


<Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Package Category</Form.Label>
    <Form.Select class="form-control selcls" name="packageCategory" value={packages.packageCategory} onChange={handleChange}>
        <option>STAYCATION</option>
        <option>NATURE</option>
        <option>BEACH</option>
        <option>FAMILY</option>
        <option>ABROAD</option>
        <option>CRUISE</option>
    </Form.Select>
     </Form.Group>


     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Travel Date</Form.Label>
    <Form.Control
    size="sm"
      type="date"
      name="travelDate"
      value={packages.travelDate}
      onChange ={handleChange}
       />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Travel Destination</Form.Label>
    <Form.Control
     type="text"
     name="travelDestination"
     value={packages.travelDestination}
     onChange ={handleChange}
   
      
       />

    
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Package Days</Form.Label>
    <Form.Control
     type="text"
     name="packageDays"
     value={packages.packageDays}
     onChange ={handleChange}
   
      
       />


  </Form.Group>

    <Form.Group>
  <Form.Label>Package Status</Form.Label>
    <Form.Select class="form-control selcls" name="packageStatus" value={packages.packageStatus} onChange={handleChange}>
        <option>DRAFT</option>
        <option>PUBLISHED</option>
        <option>CANCELLED</option>
        <option>COMPLETED</option>
    </Form.Select>
     </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Package Cost</Form.Label>
    <Form.Control
     type="text"
     name="packageCost"
     value={packages.packageCost}
     onChange ={handleChange}
   
      
       />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Package Description</Form.Label>
    <Form.Control
     type="text"
     name="packageDescription"
     value={packages.packageDescription}
     onChange ={handleChange}
   
      
       />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Package Total Number</Form.Label>
    <Form.Control
     type="text"
     name="totalPackageSignUp"
     value={packages.totalPackageSignUp}
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