import { createEmployee } from '../Apis/employeeApi';
import {useState} from 'react'
import React from "react"
import { NotificationManager } from "react-notifications"
import { Form, Button, Col, Container } from 'react-bootstrap';




export default function CreateEmployee(){
    const[employee, setEmployee] = useState({firstName : '', lastName:"", username:"", email:"", password:"", role:"" })

      

    const handleSubmit = (event) => {
      
        event.preventDefault()
        console.log("Try")
          createEmployee(employee).then(response => {
           NotificationManager.success("Succesfully Created Employee Account")
         
          }).catch(error => {
            if(error.response.data){
              NotificationManager.error(error.response.data.message)
            }else{
            NotificationManager.error("Error while Creating Account")
            }
          })
           console.log(employee)
         
     }
 
     const handleChange = (event) => {
         const { name, value } = event.target;
        setEmployee((prevState) => ({
         ...prevState,
         [name]: value,
       }));
     }

    return(

        <div className="createForm">


<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control
    size="sm"
      type="text"
      name="firstName"
      value={employee.firstName}
      onChange ={handleChange}
       />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control
     type="text"
     name="lastName"
     value={employee.lastName}
     onChange ={handleChange}
   
      
       />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control
     type="text"
     name="username"
     value={employee.username}
     onChange ={handleChange}
   
      
       />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control
     type="password"
     name="password"
     value={employee.password}
     onChange ={handleChange}
   
      
       />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control
     type="text"
     name="email"
     value={employee.email}
     onChange ={handleChange}
   
      
       />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Select class="form-control selcls" name="role" value={employee.role} onChange={handleChange}>
        <option>EMPLOYEE</option>
        <option>ADMIN</option>
    </Form.Select>
     </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}