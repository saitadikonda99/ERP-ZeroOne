import { useState, useEffect } from 'react';
import axiosPrivate from './UseAxiosPrivate';
import useAuth from './UseAuth';

const useProfile = () => {
    const [profile, setProfile] = useState({});
    const { auth } = useAuth();
    const axios = axiosPrivate();

   useEffect( () => {

    const getProfile = async () => {
        try {
            const response = await axios.get(`/profile/${auth?.id}`);
            setProfile(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    getProfile();

   },[])

    return profile;
}

export default useProfile;