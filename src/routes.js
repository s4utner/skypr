import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/Main/MainPage.js'
import { SignIn } from './pages/SignIn/SignIn.js'
import { SignUp } from './pages/SignUp/SignUp.js'
import { NotFoundPage } from './pages/NotFound/NotFound.js'
import { MyTracksPage } from './pages/MyTracks/MyTracksPage.js'
import { CategoryPage } from './pages/Categories/CategoryPage.js'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.js'

export const AppRoutes = ({ user }) => {
    return (
        <Routes>
            <Route path="/login" element={<SignIn />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/favorites" element={<MyTracksPage />}></Route>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/category/:id" element={<CategoryPage />}></Route>
            </Route>
        </Routes>
    )
}
