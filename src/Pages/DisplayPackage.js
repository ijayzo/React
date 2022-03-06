import { useEffect, useState } from "react"
import { deleteEmployee, getAllEmployee } from "../Apis/employeeApi"
import { useLocation , useNavigate} from "react-router"
import Table from 'react-bootstrap/Table'
import { NotificationManager } from "react-notifications"
import { getAllPackages, getPackageByPackageId } from "../Apis/packageApi"
import { Form, Button, Col, Container } from 'react-bootstrap';



export default function DisplayMyPackage(){
    const[packages , setPackages] = useState([])
    const navigate = useNavigate();
    const update = useLocation().state
    console.log(update)

   

    useEffect(() => {
        getPackageByPackageId(update.packageId).then(response => {
            console.log(response)
            setPackages([response])

        }).catch(error => {
            console.log(error)
        })
    }, [])

  

    return (
        <div>
    
            <h1>LIST OF MY PACKAGES</h1>

            <Table>
            <thead>
              <tr>
                  <th>Package Category</th>
                  <th>Travel Date</th>
                  <th> Travel Destination</th>
                  <th> Status</th>
                  <th> Cost</th>
                  <th> Description</th>
                  <th> Duration</th>
              </tr>
            </thead>

            <tbody>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageCategory}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.travelDate}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.travelDestination}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageStatus}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageCost}</div>): ""
                  }
              </td>

              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageDescription}</div>): ""
                  }
              </td>


              <td>
                  {
                      packages && packages.length > 0 ? packages.map(packageit => <div key={packageit.employeePackageId}>{packageit.packageDays}</div>): ""
                  }
              </td>


            </tbody>


            </Table>
        </div>
    )
}