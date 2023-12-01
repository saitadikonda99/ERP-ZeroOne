import React from 'react'

// imports start here 
import SideBar from '../components/home/sidebar/SideBar'
import './css/Home.css'
import TopBar from '../components/home/topbar/TopBar'

function Home() {
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <div className="HomeComponent-one">
          <SideBar />
        </div>
        <div className="HomeComponent-two">
          <div className="HomeComponentTopBar">
            <div className="HomeComponentTopBar-in">
               <TopBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home