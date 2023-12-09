import React from 'react'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import '../css/Home.css'
import './Attendance.css'
import TopBar from '../../components/home/topbar/TopBar'
import useAuth from '../../hooks/UseAuth'


function Attendance() {
    const { auth } = useAuth();
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <div className="HomeComponent-one">
          <SideBar/> 
        </div>
        <div className="HomeComponent-two">
          <div className="HomeComponentTopBar">
            <div className="HomeComponentTopBar-in">
               <TopBar />
            </div>
          </div>
          <div className="AttComponent-view">
            <div className="AttComponent-view-in">
                 <table>
                    <thead>
                        <tr>
                            <th>SI.NO</th>
                            <th>Event Name</th>
                            <th>Event Data</th>
                            <th>Attended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                 </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attendance