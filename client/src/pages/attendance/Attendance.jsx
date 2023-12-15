import React from 'react'
import axiosPrivate from '../../hooks/UseAxiosPrivate'
import { useState, useEffect } from 'react'
import useAuth from '../../hooks/UseAuth'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import '../css/Home.css'
import './Attendance.css'
import TopBar from '../../components/home/topbar/TopBar'

function Attendance() {

    const [ attData, setAttData ] = useState([])
    console.log(attData)
    const axios = axiosPrivate();
    const { auth } = useAuth()
    const [data , setData] = useState({
      year: '',
      sem: ''
    })
    
        const getAttData = async () => {
            try {

              if (data.year === '' || data.sem === '') {
                return alert('Please Select Year and Sem')
              }
              const response = await axios.get(`/getAttendance/${data.year ?? 'undefined'}/${data.sem ?? 'undefined'}/${auth?.id}`);

              setAttData(response.data)


            } catch (error) {
                console.log(error.message)
            }
        }


    const handleClick =  (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    
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
                <div className="Att-select">
                  <div className="Att-select-in">
                      <select 
                        name="year" 
                        id="year-select"
                        value={data.year}
                        onChange={handleClick}
                      >
                        <option value="" disabled>Select Year</option>
                          <option value="2023-24">2023-24</option>
                          <option value="2020">2022-23</option>
                          <option value="2020">2021-22</option>
                          <option value="2020">2020-21</option>
                          <option value="2020">2019-20</option>
                          <option value="2020">2018-19</option>
                      </select>

                      <select 
                        name="sem" 
                        id="sem-select"
                        value={data.sem}
                        onChange={handleClick}
                      >
                        <option value="" disabled>Select Sem</option>
                          <option value="even">Even Sem</option>
                          <option value="odd">Odd Sem</option>
                      </select>

                      <button className='att-btn' onClick={getAttData}>Submit</button>
                  </div>
                </div>
                   <div className="Att-table" id={ attData.length < 1 ? 'att-hide' : ' ' }>
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
                             {attData?.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.event_name}</td>
                                    <td>{item.event_date}</td>
                                    <td>{item.status}</td>
                                </tr>
                             ))}
                        </tbody>
                    </table>
                   </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attendance


 