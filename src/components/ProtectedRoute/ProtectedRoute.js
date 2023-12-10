import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({ redirectPath = '/login' }) => {
    const isAllowed = localStorage.getItem('user')
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Outlet />
}
