import React from 'react'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import '../css/Home.css'
import './Attendance.css'
import TopBar from '../../components/home/topbar/TopBar'
import './Select.css'


function Select() {

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
           <div className="SelectComponent-view">
                <div className="SelectComponent-view-in">
                    <div className="select-box">
                        <h1>sai</h1>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Select