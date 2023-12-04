import React from 'react'
import './Topbar.css'
import useProfile from '../../../hooks/UseProfile'
import AccountMenu from './Notification'

function TopBar() {
    const profile = useProfile()

  return (
        <div className="TopbarComponent">
            <div className="TopbarComponent-in">
                <div className="Topbar-one">
                    <div className="Topbar-one-in-one">
                        <p>Student Portal</p>
                    </div>
                    <div className="Topbar-one-in-two">
                        <div className="Topbar-one-one">
                            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar" />
                        </div>
                        <div className="Topbar-one-two">
                            <p>{profile?.uni_id}</p>
                        </div>
                        <div className="Topbar-one-three">
                            <AccountMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   )
}
export default TopBar

{/* <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar" /> */}
{/* <p>{profile?.uni_id}</p> */}
{/* <AccountMenu/> */}