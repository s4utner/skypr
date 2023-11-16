import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/Main/MainPage.js'
import { Login } from './pages/Login/Login.js'
import { Register } from './pages/Register/Register.js'
import { NotFoundPage } from './pages/NotFound/NotFound.js'
import { MyTracksPage } from './pages/MyTracks/MyTracksPage.js'
import { CategoryPage } from './pages/Categories/CategoryPage.js'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.js'

export const AppRoutes = ({
    user,
    tracks,
    setTracks,
    isLoading,
    setIsLoading,
    isPlayerVisible,
    setIsPlayerVisible,
    loadingTracksError,
}) => {
    return (
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/favorites" element={<MyTracksPage />}></Route>
                <Route
                    path="/"
                    element={
                        <MainPage
                            tracks={tracks}
                            setTracks={setTracks}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            isPlayerVisible={isPlayerVisible}
                            setIsPlayerVisible={setIsPlayerVisible}
                            loadingTracksError={loadingTracksError}
                        />
                    }
                ></Route>
                <Route path="/category/:id" element={<CategoryPage />}></Route>
            </Route>
        </Routes>
    )
}
