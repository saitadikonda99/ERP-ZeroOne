import React, { useState, useEffect } from 'react'
import axiosPrivate from '../../hooks/UseAxiosPrivate'
import useAuth from '../../hooks/UseAuth'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import '../css/Home.css'
import './Registration.css'
import TopBar from '../../components/home/topbar/TopBar'


function Registration() {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const { auth } = useAuth();
    const axios = axiosPrivate();

    useEffect( () => {
        const fetchRegister = async () => {
            try {
                const response = await axios.get(`/UserReg/${auth?.id}`)
                setData(response.data)
                console.log(data)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchRegister();
    },[])


  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <div className="HomeComponent-one">
          <SideBar />
        </div>
        <div className="HomeComponent-two">
          <div className="RegistrationsComponentTopBar">
            <div className="RegistrationsComponentTopBar-in">
               <TopBar />
            </div>
          </div>
            <div className="RegistrationsComponent-view">
                <h1></h1>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Event Date</th>
                            <th>Event Time</th>
                            <th>Event Venue</th>
                            <th>Event Organization</th>
                            <th>Event Time</th>
                            <th>Registration Date</th>
                        </tr>
                    </thead>
                    <tbody>
                      { data?.map( (item, index) => (
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{item.event_name}</td>
                            <td>{item.event_date}</td>
                            <td>{item.event_time}</td>
                            <td>{item.event_venue}</td>
                            <td>{item.event_time}</td>
                            <td>{item.registration_data}</td>
                        </tr>
                      ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration