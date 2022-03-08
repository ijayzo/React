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
import CreateHotelPartner from './Pages/CreateHotelPartner';
import GetAllHotelPartners from './Pages/GetAllHotels';
import ProbCheck from './Pages/probeCheck';
import GetAllFlights from './Pages/Flights';
import QueryFlight from './Pages/QueryFlight';
import CreatePackage from './Pages/CreatePackage';
import GetAllPackages from './Pages/GetAllPackages';
import GetAllHotelPartnersForEmployee from './Pages/GetAllHotelsEmp';
import GetMyPackages from './Pages/GetMyPackage';
import DisplayMyPackage from './Pages/DisplayPackage';
import DisplayAllHotel from './Pages/DisplayHotel';
import DisplayAllFlights from './Pages/DisplayFlight';
import GetAllPackagesADMIN from './Pages/GetAllPackageADMIN';

function App() {


  return (
    <div className="App">
     <BrowserRouter>
    <div className="App">
     <Navigation/>
    
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element = {<Home/>} />
        <Route path='/logout' element= {<LogOut/>} />
        <Route path ="/createEmployee" element={<CreateEmployee/>}/>
        <Route path='/getAll' element={<GetAllEmployee/>} />
        <Route path='/hotels/getAll' element={<GetAllHotelPartners/>} />
        <Route path ="/createHotelPartner" element={<CreateHotelPartner/>}/>
        <Route path ="/probe" element={<ProbCheck/>}/>
        <Route path ="/flight" element={<GetAllFlights/>} />
        <Route path ="/queryFlights" element={<QueryFlight/>} />
        <Route path="/createPackage" element = {<CreatePackage/>} />
        <Route path="/package/getAll" element = {<GetAllPackages/>} />
        <Route path="/hotels/getAllEmp" element={<GetAllHotelPartnersForEmployee/>} />
        <Route path ="/mypackages" element={<GetMyPackages/>} />
        <Route path = "/displayPackage" element={<DisplayMyPackage/>} />
        <Route path ="/displayHotel" element={<DisplayAllHotel/>} />
        <Route path ="/displayFlight" element={<DisplayAllFlights/>} />
        <Route path ="/admin/packages" element={<GetAllPackagesADMIN/>} />
        {/*
       
    
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
