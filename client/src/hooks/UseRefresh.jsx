import axios from 'axios'
import useAuth from './UseAuth'

const useRefresh = () => {
    const { setAuth } = useAuth()


    const refresh = async () => {
        const response = await axios.get('http://localhost:3001/refresh', {
            withCredentials: true
        });
        
        setAuth( (prev) => {
            console.log(JSON.stringify(prev))
            console.log(JSON.stringify(response.data.accessToken))
            return {
                ...prev,
                accessToken: response.data.accessToken
            }
        })

        return response
    }
    
  return refresh;
}

export default useRefresh