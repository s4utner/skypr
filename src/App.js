import { GlobalStyle } from './GlobalStyle.js'
import * as S from './AppStyles.js'
import { AppRoutes } from './routes.js'
import { useState, useEffect, useRef } from 'react'
import { getAllTracks } from './Api.js'
import { AudioPlayer } from './components/AudioPlayer/AudioPlayer.js'

function App() {
    const convertSecondsToMinutesAndSeconds = (time) => {
        const roundedTime = Math.round(time)
        const minutes = Math.floor(roundedTime / 60)
        let seconds = roundedTime % 60
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        return minutes + ':' + seconds
    }

    const notReady = () => {
        alert('Еще не реализовано')
    }

    const [tracks, setTracks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isPlayerVisible, setIsPlayerVisible] = useState(false)
    const [loadingTracksError, setLoadingTracksError] = useState(false)
    const [activeTrack, setActiveTrack] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [isLooped, setIsLooped] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [currentVolume, setCurrentVolume] = useState(0.5)

    const audioRef = useRef(null)
    const progressBarRef = useRef(null)
    const volumeBarRef = useRef(null)

    const duration = audioRef.current ? audioRef.current.duration : 0

    const handleStart = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }

    const handleStop = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    const handleLoop = () => {
        audioRef.current.loop()
        setIsLooped(true)
    }

    const handleUnloop = () => {
        audioRef.current.loop(false)
        setIsLooped(false)
    }

    const muteAudio = () => {
        if (audioRef.current) {
            isMuted ? audioRef.current.mute(false) : audioRef.current.mute(true)
            setIsMuted(!isMuted)
        }
    }

    const togglePlay = isPlaying ? handleStop : handleStart
    const toggleLoop = isLooped ? handleUnloop : handleLoop

    useEffect(() => {
        if (audioRef.current) {
            handleStart()
        }
    }, [activeTrack])

    useEffect(() => {
        getAllTracks()
            .then((response) => {
                setTracks(response)
            })
            .catch((error) => {
                setLoadingTracksError(error.message)
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            <GlobalStyle />
            <S.Wrapper>
                <S.Container>
                    <>
                        <AppRoutes
                            user={localStorage.getItem('user')}
                            tracks={tracks}
                            setTracks={setTracks}
                            isLoading={isLoading}
                            setIsLoading={setIsLoading}
                            isPlayerVisible={isPlayerVisible}
                            setIsPlayerVisible={setIsPlayerVisible}
                            loadingTracksError={loadingTracksError}
                            setActiveTrack={setActiveTrack}
                            togglePlay={togglePlay}
                            convertSecondsToMinutesAndSeconds={
                                convertSecondsToMinutesAndSeconds
                            }
                        />
                        {AudioPlayer({
                            audioRef,
                            togglePlay,
                            isPlaying,
                            isPlayerVisible,
                            isLoading,
                            activeTrack,
                            currentTime,
                            setCurrentTime,
                            duration,
                            progressBarRef,
                            convertSecondsToMinutesAndSeconds,
                            currentVolume,
                            setCurrentVolume,
                            volumeBarRef,
                            toggleLoop,
                            isLooped,
                            notReady,
                            muteAudio,
                        })}
                    </>
                </S.Container>
            </S.Wrapper>
        </>
    )
}

export default App
