import React from 'react'
import './SideBar.css'
import useLogout from '../../../hooks/UseLogout'

function SideBar() {

    const logout = useLogout()

  return (
        <div className="SidebarComponent">
            <div className="SidebarComponent-in">
                <div className="Sidebar-log">
                    <h2>ZeroOne ERP</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
  )
}

export default SideBar