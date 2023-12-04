import { useState, useEffect } from 'react'
import axiosPrivate from '../../hooks/UseAxiosPrivate'



const EventFetch = () => {
    const [events, setEvents] = useState([])
    const [error, setError] = useState(null)
    const axios = axiosPrivate()

    useEffect( () => {

        const event = async () => {
            try {
                const response = await axios.get('/events')
                setEvents(response.data)
            } catch (error) {
                setError(error)
            }
        }
        event()
    },[]);

    return error ? error : events;
}

export default EventFetch