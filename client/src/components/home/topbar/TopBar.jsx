import React from 'react'
import useAuth from '../../../hooks/UseAuth'

function TopBar() {
    const { auth } = useAuth()
  return (
        <div className="TopbarComponent">
            <div className="TopbarComponent-in">
                <div className="TopbarComponent-Name">
                    <h3>{auth.user}</h3>
                </div>
            </div>
        </div>
  )
}
export default TopBar