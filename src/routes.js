import { Routes, Route } from 'react-router-dom'
import { App } from './pages/Main/App.js'
import { signIn } from './pages/SIgnIn/SignIn.js'
import { signUp } from './pages/SignUp/SignUp.js'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/signin" element={<signIn />}></Route>
            <Route path="/signup" element={<signUp />}></Route>
        </Routes>
    )
}
