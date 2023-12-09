import React from 'react'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import AdminSidebar from '../../components/home/admin/sidebar/Sidebar'
import '../css/Home.css'
import './Home.css'
import TopBar from '../../components/home/topbar/TopBar'
import CountUp from 'react-countup';
import Chart from './Chart'
import useAuth from '../../hooks/UseAuth'


// import icons here
import { PiStudent } from "react-icons/pi";

function Home() {
    const { auth } = useAuth();
  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <div className="HomeComponent-one">
          { auth.role == 'Admin' ? <AdminSidebar/> : <SideBar/> }
        </div>
        <div className="HomeComponent-two">
          <div className="HomeComponentTopBar">
            <div className="HomeComponentTopBar-in">
               <TopBar />
            </div>
          </div>
          <div className="HomeComponent-view">
            <div className="HomeComponent-view-in">
              
              <div className="HomeContainer-one">
                  <div className="Hm-stats">
                      <div className="Hm-stats-one">
                        <div className="Hm-stats-one-one">
                          <PiStudent className='icon-cm' /> <p>Club Members</p>
                        </div>
                        <div className="Hm-stats-one-two">
                          <div className="Hm-stats-count-cm">
                            <h1><CountUp end={500} /></h1>
                          </div>
                        </div>
                      </div>
                      <div className="Hm-stats-two">
                      <div className="Hm-stats-one-one">
                          <PiStudent className='icon-cd' /> <p>Club Domains</p>
                        </div>
                        <div className="Hm-stats-one-two">
                          <div className="Hm-stats-count-cd">
                            <h1><CountUp end={6} /></h1>
                          </div>
                        </div>
                      </div>
                      <div className="Hm-stats-three">
                      <div className="Hm-stats-one-one">
                          <PiStudent className='icon-ca' /> <p>Club Activities</p>
                        </div>
                        <div className="Hm-stats-one-two">
                          <div className="Hm-stats-count-ca">
                            <h1><CountUp end={100} /></h1> 
                          </div>
                        </div>
                      </div>
                      <div className="Hm-stats-four">
                      <div className="Hm-stats-one-one">
                          <PiStudent className='icon-cp' /> <p>Club Projects</p>
                        </div>
                        <div className="Hm-stats-one-two">
                          <div className="Hm-stats-count-cp">
                            <h1><CountUp end={20} /></h1>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="HomeContainer-two">
                <div className="Hm-chart">
                    <Chart />
                </div>
              </div>
              <div className="HomeContainer-three">
                 <div className="HomeFooter">
                    <div className="HomeFooter-one">
                     <p>Copyright © 2023 ZeroOne. All rights reserved.</p>
                    </div>
                    <div className="HomeFooter-two">
                      <p>Built by Tadikonda Sai Manikanta</p>
                    </div>
                 </div>
              </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home