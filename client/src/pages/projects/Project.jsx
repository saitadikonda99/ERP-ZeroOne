import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosPrivate from '../../hooks/UseAxiosPrivate'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import AdminSidebar from '../../components/home/admin/sidebar/Sidebar'
import '../css/Home.css'
import './Project.css'
import TopBar from '../../components/home/topbar/TopBar'
import useAuth from '../../hooks/UseAuth'


function Projects() {
    const { auth } = useAuth();
    const axios = axiosPrivate()
    const host = import.meta.env.VITE_HOST

    const [proData, setProData] = useState([])
    const [error, setError] = useState(null)


    useEffect( () => {

        const getProjects = async () => {
            try {
                const response = await axios.get(`${host}/getProjects/${auth.id}`)
                setProData(response.data)
            } catch (error) {
                setError(error.message)
            }
        }
    
    getProjects()
    }, [])
    


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
           <div className="Projects-Component">
              <div className="Project-Component-in">
                 <div className="project-cm-one">
                    <Link to='/enroll-project'>Enroll new Project</Link>
                 </div>

                  {proData.map( (data, index ) => (
                    <div key={index} className='pro-box'>
                        <div>{data.academic_year_name}</div>
                        <div>{data.academic_sem}</div>
                        <div>{data.project_link}</div>
                        <div>{data.project_name}</div>
                        <div>{data.project_status}</div>
                        <div>{data.enroll_status}</div>
                        <div></div>
                    </div>
                  ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Projects