import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from '../../hooks/UseAuth'
import useRefresh from '../../hooks/UseRefresh'


const PersistLogin = () => {
    const [loading, setLoading] = useState(true);
    const refresh = useRefresh();
    const { auth, setAuth }  = useAuth();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                const response = await refresh();
                const accessToken = response?.data?.accessToken;
                const refreshToken = response?.data?.refreshToken;
                const role = response?.data?.role;
                const user = response?.data?.username;
            
                // set the auth state
                setAuth({
                    accessToken,
                    refreshToken,
                    role,
                    user,
                });

            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        !auth?.accessToken ? verifyRefreshToken() :  setLoading(false);

    }, []);  

    if (loading) {
        return <div>Loading...</div>;
    }
    return <Outlet />;
}

export default PersistLogin