import { GlobalStyle } from './GlobalStyle.js'
import * as S from './AppStyles.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect, useRef } from 'react'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer.js'
import { UserContext } from './Authorization.js'
import { useSelector } from 'react-redux'

function App() {
    const activeTrack = useSelector((state) => state.tracks.activeTrack)
    const [playlist, setPlaylist] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isPlayerVisible, setIsPlayerVisible] = useState(false)
    const [loadingTracksError, setLoadingTracksError] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)
    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem('user')) ?? 'Не авторизован',
    )

    const audioRef = useRef(null)

    const handleStart = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }

    const handleStop = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    const togglePlay = isPlaying ? handleStop : handleStart

    useEffect(() => {
        if (audioRef.current) {
            handleStart()
        }
    }, [activeTrack])

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={[userData, setUserData]}>
                <S.Wrapper>
                    <S.Container>
                        <>
                            <AppRoutes
                                user={localStorage.getItem('user')}
                                isLoading={isLoading}
                                setIsLoading={setIsLoading}
                                setIsPlayerVisible={setIsPlayerVisible}
                                loadingTracksError={loadingTracksError}
                                setLoadingTracksError={setLoadingTracksError}
                                playlist={playlist}
                                setPlaylist={setPlaylist}
                            />
                            {AudioPlayer({
                                audioRef,
                                togglePlay,
                                isPlaying,
                                isPlayerVisible,
                                isLoading,
                                playlist,
                                setPlaylist,
                                setLoadingTracksError,
                                setIsLoading,
                            })}
                        </>
                    </S.Container>
                </S.Wrapper>
            </UserContext.Provider>
        </>
    )
}

export default App
