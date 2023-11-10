import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/Main/MainPage.js'
import { SignIn } from './pages/SignIn/SignIn.js'
import { SignUp } from './pages/SignUp/SignUp.js'
import { NotFoundPage } from './pages/NotFound/NotFound.js'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    )
}
