import React, { useEffect } from 'react'
import { useState } from 'react'
import SideBar from '../../components/home/sidebar/SideBar'
import TopBar from '../../components/home/topbar/TopBar'
import AdminSidebar from '../../components/home/admin/sidebar/Sidebar'
import useAuth from '../../hooks/UseAuth'
import axiosPrivate from '../../hooks/UseAxiosPrivate'
import './Enroll.css'
import '../css/Home.css'

function Enroll() {

    const [proData, setProData] = useState([])
    const [error, setError] = useState(null)

    const host = import.meta.env.VITE_HOST
    const { auth } = useAuth();
    const axios = axiosPrivate();

    useEffect( () => {
        
        const handleProject = async () => {
            try {
                const response = await axios.get(`${host}/projects/${auth.id}`)

                setProData(response.data)

            } catch (error) {
                setError(error)
            }
        }
        handleProject()
    },[])

    const handleRegister = async (projectId) => {
        try {

            const response = await axios.post(`${host}/enroll-project/${auth.id}/${projectId}`)

            if(response.data === 'success'){
                alert('Successfully Enrolled')
                window.location.reload()
            }

        } catch (error) {
            setError(error)
        }
    }


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
                <div className="Enroll-component">
                    <div className="Enroll-component-in">
                        { proData.map( (data, index) => (
                            <div key={index} className='enroll-data'>
                                <div>{++index}</div>
                                <div>{data.project_name}</div>
                                <div>{data.project_description}</div>
                                <div>{data.academic_year_name}</div>
                                <div>{data.academic_sem}</div>
                                <div>{data.project_deadline}</div>
                                <div>{data.project_link}</div>
                                <div>{data.project_status}</div>
                                <div>
                                    <button onClick={ () => handleRegister(data.project_id)}>
                                        Enroll 
                                    </button>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
           </div>
       </div>
    </div>
  )
}

export default Enroll