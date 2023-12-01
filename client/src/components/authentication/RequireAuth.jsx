import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/UseAuth'

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth()
    const location = useLocation()
    
    return (
        <>
             { auth?.role?.find(role => allowedRoles?.includes(role))
               || auth?.role ?(
                <Outlet />
            ) : (
                <Navigate
                    to="/login"
                    replace
                    state={{ from: location.pathname }}
                />
            )}
        </>
    )
}


export default RequireAuth;