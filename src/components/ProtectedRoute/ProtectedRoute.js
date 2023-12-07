import { Navigate, Outlet } from 'react-router-dom'
import { useAuthorization } from '../../Authorization'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const isAllowed = useAuthorization()
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Outlet />
}
