import React, {useState, useEffect} from 'react'
import useAuth from '../../../hooks/UseAuth'
import axiosPrivate from '../../../hooks/UseAxiosPrivate'
import useLogout from '../../../hooks/UseLogout'
import './TopBar.css'

function TopBar() {
    const { auth } = useAuth()
    const logout = useLogout()
    const [profile, setProfile] = useState(null)
    const axios = axiosPrivate()
    const userId = auth?.id

    useEffect(() => {
        const getProfile = async () => {
            try {
                const response = await axios.get(`/profile/${userId}`)
                setProfile(response.data)
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        getProfile();
    }, []); 
 
  return (
        <div className="TopbarComponent">
            <div className="TopbarComponent-in">
                <div className="TopbarComponent-Icon">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar" />
                </div>
                <div className="TopbarComponent-Name">
                    <p>{profile?.uni_id}</p>
                </div>
            </div>
        </div>
   )
}
export default TopBar