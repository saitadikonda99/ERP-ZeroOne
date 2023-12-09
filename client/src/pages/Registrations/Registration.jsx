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

    const handleButton = (eventId) => {
      const confirm = window.confirm("Are you sure you want to unregister?")
      if(confirm) {
        handleUnregister(eventId)
      } else {
        return
      }
    }

    const handleUnregister = async (eventId) => {
      try {
        const response = await axios.delete(`/unRegister/${eventId}/${auth?.id}`)
         
        if(response.status === 200) {
          alert(response.data.message)
          window.location.reload()
        }
      
      } catch (error) {
        console.log(error)
        alert(error.message)
      }
    }

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
              <div className="RegistrationsComponent-view-in">
                <h1>{error?.message}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Event Date</th>
                            <th>Event Time</th>
                            <th>Event Venue</th>
                            <th>Event Organization</th>
                            <th>Registration Date</th>
                            <th>Unregister</th>
                        </tr>
                    </thead>
                    <tbody>
                      { data?.map( (item, index) => (
                        <tr key={index}>
                            <td>{++index}</td>
                            <td>{item.event_name}</td>
                            <td>{item.event_time}</td>
                            <td>{item.event_venue}</td>
                            <td>{item.event_org}</td>
                            <td>{item.registration_data.slice(0, 10)}</td>
                            <td><button onClick={() => handleButton(item.event_id)} className='unregister-btn'>Unregister</button></td>
                        </tr>
                      ))}
                    </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration