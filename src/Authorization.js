import { useContext, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const authorizationContext = createContext(null)
export const authorizationLocalStorage = () => {
    return localStorage.getItem('user')
}

export const useAuthorization = () => {
    const activeUser = useContext(authorizationContext)
    return activeUser
}

export const Authorization = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(
        authorizationLocalStorage(),
    )

    const navigate = useNavigate()

    const login = (authorizationData) => {
        setIsAuthorized(authorizationData)
        localStorage.setItem('user', JSON.stringify(authorizationData))
        navigate('/')
    }

    const logout = () => {
        setIsAuthorized(null)
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <authorizationContext.Provider value={(isAuthorized, login, logout)}>
            {children}
        </authorizationContext.Provider>
    )
}
