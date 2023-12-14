import { GlobalStyle } from './GlobalStyle.js'
import * as S from './AppStyles.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect, useRef } from 'react'
import { getAllTracks } from './Api.js'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer.js'
import { UserContext } from './Authorization.js'
import { useDispatch, useSelector } from 'react-redux'
import { setTracks } from './store/slices.js'

function App() {
    const dispatch = useDispatch()
    const activeTrack = useSelector((state) => state.tracks.activeTrack)
    const [isLoading, setIsLoading] = useState(true)
    const [isPlayerVisible, setIsPlayerVisible] = useState(false)
    const [loadingTracksError, setLoadingTracksError] = useState(false)
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

    useEffect(() => {
        getAllTracks()
            .then((tracks) => {
                dispatch(setTracks({ tracks }))
            })
            .catch((error) => {
                setLoadingTracksError(error.message)
            })
            .finally(() => setIsLoading(false))
    }, [])

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
                                isPlayerVisible={isPlayerVisible}
                                setIsPlayerVisible={setIsPlayerVisible}
                                loadingTracksError={loadingTracksError}
                                togglePlay={togglePlay}
                            />
                            {AudioPlayer({
                                audioRef,
                                togglePlay,
                                isPlaying,
                                isPlayerVisible,
                                isLoading,
                            })}
                        </>
                    </S.Container>
                </S.Wrapper>
            </UserContext.Provider>
        </>
    )
}

export default App
