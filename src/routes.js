import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/Main/MainPage.js'
import { SignIn } from './pages/SignIn/SignIn.js'
import { SignUp } from './pages/SignUp/SignUp.js'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
    )
}
