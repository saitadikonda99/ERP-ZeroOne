import React from 'react'
import axios from 'axios'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import '../css/Home.css'
import './Attendance.css'
import TopBar from '../../components/home/topbar/TopBar'

function Attendance() {
     
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
                      <select name="year" id="year-select">
                          <option value="2021">2023-24</option>
                          <option value="2020">2022-23</option>
                          <option value="2020">2021-22</option>
                          <option value="2020">2020-21</option>
                          <option value="2020">2019-20</option>
                          <option value="2020">2018-19</option>
                      </select>

                      <select name="sem" id="sem-select">
                          <option value="">Even Sem</option>
                          <option value="">Odd Sem</option>
                      </select>

                      <button className='att-btn'>Submit</button>
                  </div>
                </div>
                   <div className="Att-table">
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
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
