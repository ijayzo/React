import { Form, Button, Col, Container} from 'react-bootstrap';
import { employeeLogin } from '../Apis/employeeApi';
import {useEffect, useState} from 'react'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router'
import Navigation from './Navigation';

export default function Login(){

  const roles = sessionStorage.getItem("role")
  const[login, setLogin] = useState({ username: "", password:"" })
  const[role, setRole] = useState(roles)
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault()
    employeeLogin(login).then(response => {
      console.log(response)
         if(response){
             sessionStorage.setItem("token", response.token)
            sessionStorage.setItem("role", response.role)
            sessionStorage.setItem("user", response.username)
        NotificationManager.success("Successfully Login")
        setRole(response.role)
        navigate("/home")
         
        
         }
         
      }).catch(error => {
        console.log(error)
        console.log(error.response)
        if(error.response.data){
            NotificationManager.error(error.response.data.message)
        }else{
          NotificationManager.error("Error Occured While Loging In")
        }
        
      })
     
 }

 const handleChange = (event) => {
     const { name, value } = event.target;
    setLogin((prevState) => ({
     ...prevState,
     [name]: value,
   }));
 }




    return(
        <div>
          <h1>LOGIN</h1>

          <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control
      type="text"
      name="username"
      value={login.username}
      onChange ={handleChange}
   
       />

  </Form.Group>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      name="password"
      value={login.password}
      onChange ={handleChange}
   
       />
  
  </Form.Group>

  <Button variant="primary" type="submit">
    LOGIN
  </Button>

  </Form>



        </div>
    )
}