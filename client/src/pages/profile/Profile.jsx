import React from 'react'

// imports start here 
import SideBar from '../../components/home/sidebar/SideBar'
import '../css/Home.css'
import './Profile.css'
import TopBar from '../../components/home/topbar/TopBar'
import useProfile from '../../hooks/UseProfile'
import useAuth from '../../hooks/UseAuth'



function Profile() {

    const profile = useProfile();
    const { auth } = useAuth();
    console.log(profile)

  return (
    <div className="HomeComponent">
      <div className="HomeComponent-in">
        <div className="HomeComponent-one">
          <SideBar />
        </div>
        <div className="HomeComponent-two">
            <div className="ProfileComponent">
              <div className="ProfileComponent-in">
                <div className="ProfileComponentTopBar">
                  <div className="ProfileComponentTopBar-in">
                    <TopBar />
                  </div>
                </div>
                <div className="ProfileComponent-view">
                  <h1>{profile?.error}</h1>
                  <ul>
                    <li>Univeristy Id : {profile.uni_id}</li>
                    <li>Full Name : {profile.FullName}</li>
                    <li>Gender : {profile.gender}</li>
                    <li>Data of Birth: {profile.date_of_birth}</li>
                    <li>Email : {profile.uni_id +'@kluniversity.in'}</li>
                    <li>Phone : {profile.phnumber}</li>
                    <li>Division :{profile.Division}</li>
                    <li>Academic Year :{profile.academic_year}</li>
                    <li>Academic Sem : {profile.academic_sem}</li>
                    <li>Branch : {profile.branch}</li>
                    <li>Github : <a href={'https://' + profile.github_link }>Here</a></li>

                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile