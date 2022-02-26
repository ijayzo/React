import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route, Routes, Link } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications'
import Login from './Pages/Login';
import Navigation from './Pages/Navigation';
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import LogOut from './Pages/Logout';
import CreateEmployee from './Pages/CreateEmployee';
import GetAllEmployee from './Pages/GetAllEmployee';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <div className="App">
     <div> HOME</div>
     <Navigation/>
    
    
  
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element = {<Home/>} />
        <Route path='/logout' element= {<LogOut/>} />
        <Route path ="/createEmployee" element={<CreateEmployee/>}/>
        <Route path='/getAll' element={<GetAllEmployee/>} />
        {/*
        <Route path ="/createManager" element={<CreateManager/>}/>
    
        <Route path='/reimburse/create' element={<CreateReimbursement/>} />
        <Route path='/reimburse/get' element={<GetUserReimbursement/>} />
        <Route path='/reimburse/getAll' element ={<GetAllReimbursement/>} />
        <Route path='/reimburse/update' element={<Update/>} />
        <Route path="/process" element={<GetUserReimbursementProcess/>} /> */}

      </Routes>
   
     <NotificationContainer/>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
