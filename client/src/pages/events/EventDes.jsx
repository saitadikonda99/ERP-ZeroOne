import React from 'react'
import { useParams } from 'react-router-dom';
import EventFetch from './EventFetch'
import SideBar from '../../components/home/sidebar/SideBar'
import TopBar from '../../components/home/topbar/TopBar'
import EventImg  from '../../assets/EventImg.jpeg'
import useAuth from '../../hooks/UseAuth'
import axiosPrivate from '../../hooks/UseAxiosPrivate'
import '../css/Home.css'
import './EventDes.css'

// import icons here
import { FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function EventDes() {
     const { id } = useParams();
     const events = EventFetch()
     const eventAtIndex = events[`${id - 1}`];


     const { auth } = useAuth();
     const axios = axiosPrivate();
 
     const handleRegister = async (eventId) => {
         
         try {
 
             const response = await axios.post(`eventRegister/${auth?.id}/${eventId}`)

             alert(response.data.message);
         } catch (error) {
             alert('failed to register')
             console.log(error)
         }
     }

  return (
        <div className="HomeComponent">
            <div className="HomeComponent-in">
                <div className="HomeComponent-one">
                    <SideBar />
                </div>
                <div className="HomeComponent-two">
                    <div className="EventsComponentTopBar">
                    <div className="EventsComponentTopBar-in">
                        <TopBar />
                    </div>
                    </div>
                    <div className="EventsDes-view">
                        <div className="EventsDes-view-in">
                        <div className="EventsDes-view-one">
                            <div className="EventsDes-one-one">
                                <img src={EventImg} alt="" />
                            </div>
                            <div className="EventsDes-one-two">
                                <div className="Event-name">
                                    <h1>{eventAtIndex?.event_name }</h1> 
                                </div>
                                 <div className="Event-time">
                                    <div className="Event-time-one">
                                        <FaRegClock className='icon-time'/> 
                                    </div>
                                    <div className="Event-time-two">
                                        <h4>{eventAtIndex?.event_date?.slice(0, 10)}</h4>
                                        <p>{eventAtIndex?.event_time}</p>
                                        <div className="Event-time-in">
                                            <button>Add to calendar</button>
                                        </div>
                                    </div>
                                 </div>
                                <div className="Event-venue">
                                    <div className="Event-venue-one">
                                        <IoLocationSharp className='icon-venue' />
                                    </div>
                                    <div className="Event-venue-two">
                                        <h4>{eventAtIndex?.event_venue}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="EventsDes-view-two">
                           <div className="EventsDes-view-two-one">
                                <h1>Event Description</h1>
                                <p>{eventAtIndex?.event_description}</p>
                           </div>
                           <div className="EventsDes-view-two-two">
                                <div className="EventDes-Reg">
                                    <button onClick={()=>{handleRegister(id)}}>Register</button>
                                </div>
                                <div className="EventDes-Host">
                                    <h1>Hosted by</h1>
                                    <p>{eventAtIndex?.event_host}</p>
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

export default EventDes