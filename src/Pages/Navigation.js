import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { BrowserRouter ,Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'


export default function Navigation(){
    const role = sessionStorage.getItem("role")
    const getToken = sessionStorage.getItem("token")

    const navigate = useNavigate();
    const  token = sessionStorage.getItem("token")
    const user = sessionStorage.getItem("user")
    const[userToken, setuserToken]= useState(token)
 
useEffect(() =>{
   
    if(userToken !== null){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.headers.common['User'] = user
    }
   // else if(location.pathname !== "/" ) {
        
       // delete axios.defaults.headers.common['Authorization']
        //navigate("/login")
    // } else if( location.pathname === "/createManager"){
      

    // }
  //  }
   

}, [userToken])

    return(

        <div>
        <div className="row">
            <div className="col-md-12">
              
                    <Navbar bg="dark" variant="dark" expand="xxxl" sticky="top">
                        <Navbar.Brand href="/home">VACATION </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" class=".d-none">
                               {getToken === null ? "" :<Nav.Link  href="/logout">LogOut</Nav.Link>}
                                { getToken === null ? <Nav.Link href="/login">LogIn</Nav.Link> : "" }
                                <Nav.Link href="/createEmployee">Create Employee</Nav.Link>
                                <Nav.Link href='/getAll'>Get All Employee</Nav.Link>
                                <Nav.Link href='/hotels/getAll'>Get All Hotels</Nav.Link>
                                <Nav.Link href ="/flight">Get Flights</Nav.Link>
                                <Nav.Link href="/createPackage">Create Package</Nav.Link>
                                <Nav.Link href='/package/getAll'>Get All Packages</Nav.Link>
                                <Nav.Link href = "/hotels/getAllEmp">Get All Hotel For Employee</Nav.Link>
                                <Nav.Link href ="/mypackages">Get My Packages</Nav.Link>
                                { role === "ADMIN" ? <Nav.Link href="/createHotelPartner">Create Hotel Partner</Nav.Link>:"" }
                                {/* 
                               
                               
                                { role === "MANAGER" ?  <Nav.Link href='/reimburse/getAll'>Get All Reimbursemnt</Nav.Link>:""}
                               { role === "MANAGER" ? "":<Nav.Link href='/reimburse/get'>Get My Reimbursement</Nav.Link> }
                                { role === "MANAGER" ? "":<Nav.Link href='/reimburse/create'>Create Reimbursement</Nav.Link> } */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <br />
                   
            </div>
        </div>
    </div>
    )
}