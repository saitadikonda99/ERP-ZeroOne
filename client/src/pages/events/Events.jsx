import React from 'react'
import { useNavigate } from 'react-router-dom'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import '../css/Home.css'
import './Events.css'
import TopBar from '../../components/home/topbar/TopBar'
import EventFetch from './EventFetch'

function Events() {
    const events = EventFetch()
    const navigate = useNavigate();
    console.log(events)
  
  
    const handleClick = (eventId) => {
        // navigate to another page 
        navigate(`/EventDes/${eventId}`)
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
            <div className="EventsComponent-view">
                
                <div className="event-card-box">
                    {events.map( (event) => (
                        <div key={event.event_id} className='event-card' onClick={() => handleClick(event.event_id)}>
                                <div className="event-card-poster">
                                    <img src={event.poster_link} alt="poster" />
                                </div>
                                <div className="event-card-one">
                                    <h2>{event.event_name}</h2>
                                </div>
                                <div className="event-card-two">
                                    <p> {event.event_date}</p>
                                </div>
                                <div className="event-card-three">
                                     <h4>{event.event_venue}</h4>
                                </div>
                                <div className="event-card-four">
                                    <p>{event.event_time}</p>  
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Events
