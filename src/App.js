import { GlobalStyle } from './GlobalStyle.js'
import * as S from './AppStyles.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect } from 'react'
import { getAllTracks } from './Api.js'

function App() {
    const [tracks, setTracks] = useState([
        { id: 1, name: 1, author: 1, album: 1, duration_in_seconds: 1 },
        { id: 2, name: 2, author: 2, album: 2, duration_in_seconds: 2 },
        { id: 3, name: 3, author: 3, album: 3, duration_in_seconds: 3 },
        { id: 4, name: 4, author: 4, album: 4, duration_in_seconds: 4 },
        { id: 5, name: 5, author: 5, album: 5, duration_in_seconds: 5 },
        { id: 6, name: 6, author: 6, album: 6, duration_in_seconds: 6 },
        { id: 7, name: 7, author: 7, album: 7, duration_in_seconds: 7 },
        { id: 8, name: 8, author: 8, album: 8, duration_in_seconds: 8 },
        { id: 9, name: 9, author: 9, album: 9, duration_in_seconds: 9 },
        { id: 10, name: 10, author: 10, album: 10, duration_in_seconds: 10 },
    ])
    const [isLoading, setIsLoading] = useState(false)
    const [isPlayerVisible, setIsPlayerVisible] = useState(false)
    const [loadingTracksError, setLoadingTracksError] = useState(false)

    useEffect(() => {
        try {
            getAllTracks().then((response) => {
                setTracks(response)
            })
        } catch (error) {
            setLoadingTracksError(error.message)
        } finally {
            setIsLoading(false)
        }
    }, [])

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <AppRoutes
                        user={localStorage.getItem('user')}
                        tracks={tracks}
                        setTracks={setTracks}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        isPlayerVisible={isPlayerVisible}
                        setIsPlayerVisible={setIsPlayerVisible}
                        loadingTracksError={loadingTracksError}
                    />
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default App
