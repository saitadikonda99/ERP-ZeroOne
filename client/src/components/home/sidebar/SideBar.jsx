import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import useLogout from '../../../hooks/UseLogout'
import { useLocation } from 'react-router-dom';


// import icons here 
import { HiMiniHome } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa6";
import { TbSchool } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { LuSquareCode } from "react-icons/lu";
import { GrAchievement } from "react-icons/gr";
import { ImTicket } from "react-icons/im";
import { RiLogoutCircleLine } from "react-icons/ri";


function SideBar() {

    const logout = useLogout()
    const [path, setPath] = useState('')

    const location = useLocation();
    const pathSegments = location.pathname.split('/');
  
    // Get the segment after localhost:3000/
    const c_path = pathSegments[1];
  

  return (
        <div className="SidebarComponent">
            <div className="SidebarComponent-in">
                <div className="Sidebar-logo">
                    <h1>ZeroOne</h1>
                </div>
                <div className="Sidebar-menu">
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/' id={c_path === '' ? 'activated' : ''}><HiMiniHome />Home</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/Profile' id={c_path === 'Profile' ? 'activated' : ''}><CgProfile />Profile</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/Events' id={c_path === 'Events' ? 'activated' : ''}><FaLaptopCode />Events</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/Registration' id={c_path === 'Registration' ? 'activated' : ''}><FaRegRegistered />Registrations</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/Attendance' id={c_path === 'Attendance' ? 'activated' : ''}><TbSchool />Attendance</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/Projects' id={c_path === 'Projects' ? 'activated' : ''}> <GoProjectRoadmap />Projects</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/Assignments' id={c_path === 'Assignments' ? 'activated' : ''}><LuSquareCode />Assignments</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/Achievements' id={c_path === 'Achievements' ? 'activated' : ''}><GrAchievement />Achievements</Link>
                    </div>
                    <div className='Sidebar-option'>
                        <Link className='Sidebar-option-link' to='/RaiseTicket' id={c_path === 'RaiseTicket' ? 'activated' : ''}> <ImTicket />Raise Ticket</Link>
                    </div>
                </div>
                <div className="Sidebar-logout">
                    <button onClick={logout}><RiLogoutCircleLine />Logout</button>
                </div>
            </div>
        </div>
  )
}

export default SideBar