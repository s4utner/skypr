import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './AudioPlayerStyles.js'
import { useState, useRef } from 'react'
import {
    convertSecondsToMinutesAndSeconds,
    alertFunctionIsNotReady,
} from '../../helpers.js'
import { useSelector } from 'react-redux'

export const AudioPlayer = ({
    isPlayerVisible,
    isLoading,
    audioRef,
    togglePlay,
    isPlaying,
}) => {
    const [isLooped, setIsLooped] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [currentVolume, setCurrentVolume] = useState(0.5)

    const activeTrack = useSelector((state) => state.tracks.activeTrack)
    const progressBarRef = useRef(null)
    const volumeBarRef = useRef(null)
    const duration = audioRef.current ? audioRef.current.duration : 0

    const handleLoop = () => {
        audioRef.current.loop = true
        setIsLooped(true)
    }

    const handleUnloop = () => {
        audioRef.current.loop = false
        setIsLooped(false)
    }

    const toggleLoop = isLooped ? handleUnloop : handleLoop

    return (
        isPlayerVisible && (
            <>
                <audio
                    controls
                    src={activeTrack ? activeTrack.track_file : ''}
                    ref={audioRef}
                    onTimeUpdate={() => {
                        setCurrentTime(audioRef.current.currentTime)
                    }}
                ></audio>
                {duration && (
                    <S.TrackTime>
                        {convertSecondsToMinutesAndSeconds(currentTime) +
                            ' ' +
                            '/' +
                            ' ' +
                            convertSecondsToMinutesAndSeconds(duration)}
                    </S.TrackTime>
                )}
                <S.Bar>
                    <S.BarContent>
                        <S.ProgressInput
                            ref={progressBarRef}
                            type="range"
                            min={0}
                            max={
                                !isNaN(audioRef?.current?.duration)
                                    ? audioRef.current.duration
                                    : 0
                            }
                            value={currentTime}
                            step={0.01}
                            onChange={() => {
                                setCurrentTime(progressBarRef.current.value)
                                audioRef.current.currentTime =
                                    progressBarRef.current.value
                            }}
                            $color="#ff0000"
                        />
                        <S.BarPlayerBlock>
                            <S.BarPlayer>
                                <S.PlayerControls>
                                    <S.PlayerButtonPrev>
                                        <S.PlayerButtonPrevSvg
                                            alt="prev"
                                            onClick={alertFunctionIsNotReady}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                                        </S.PlayerButtonPrevSvg>
                                    </S.PlayerButtonPrev>
                                    <S.PlayerButtonPlay>
                                        <S.PlayerButtonPlaySvg
                                            alt="play"
                                            onClick={togglePlay}
                                        >
                                            {isPlaying ? (
                                                <use xlinkHref="img/icon/sprite.svg#icon-pause"></use>
                                            ) : (
                                                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                                            )}
                                        </S.PlayerButtonPlaySvg>
                                    </S.PlayerButtonPlay>
                                    <S.PlayerButtonNext>
                                        <S.PlayerButtonNextSvg
                                            alt="next"
                                            onClick={alertFunctionIsNotReady}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                        </S.PlayerButtonNextSvg>
                                    </S.PlayerButtonNext>
                                    <S.PlayerButtonRepeat>
                                        <S.PlayerButtonRepeatSvg
                                            alt="repeat"
                                            $islooped={isLooped}
                                            onClick={toggleLoop}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                                        </S.PlayerButtonRepeatSvg>
                                    </S.PlayerButtonRepeat>
                                    <S.PlayerButtonShuffle>
                                        <S.PlayerButtonShuffleSvg
                                            alt="shuffle"
                                            onClick={alertFunctionIsNotReady}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                                        </S.PlayerButtonShuffleSvg>
                                    </S.PlayerButtonShuffle>
                                </S.PlayerControls>

                                <S.PlayerTrackPlay>
                                    <S.TrackPlayContain>
                                        <S.TrackPlayImage>
                                            {isLoading ? (
                                                <Skeleton
                                                    width={55}
                                                    height={55}
                                                    baseColor="#202020"
                                                    highlightColor="#444"
                                                />
                                            ) : (
                                                <S.TrackPlaySvg alt="music">
                                                    {activeTrack ? (
                                                        activeTrack.logo
                                                    ) : (
                                                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                                    )}
                                                </S.TrackPlaySvg>
                                            )}
                                        </S.TrackPlayImage>
                                        <S.TrackPlayAuthor>
                                            {isLoading ? (
                                                <Skeleton
                                                    width={90}
                                                    baseColor="#202020"
                                                    highlightColor="#444"
                                                />
                                            ) : (
                                                <S.TrackPlayAuthorLink href="http://">
                                                    {activeTrack.name}
                                                </S.TrackPlayAuthorLink>
                                            )}
                                        </S.TrackPlayAuthor>
                                        <S.TrackPlayAlbum>
                                            {isLoading ? (
                                                <Skeleton
                                                    width={90}
                                                    baseColor="#202020"
                                                    highlightColor="#444"
                                                />
                                            ) : (
                                                <S.TrackPlayAlbumLink href="http://">
                                                    {activeTrack.author}
                                                </S.TrackPlayAlbumLink>
                                            )}
                                        </S.TrackPlayAlbum>
                                    </S.TrackPlayContain>
                                    <S.TrackPlayLikeDis>
                                        <S.TrackPlayLike>
                                            <S.TrackPlayLikeSvg
                                                alt="like"
                                                onClick={
                                                    alertFunctionIsNotReady
                                                }
                                            >
                                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                            </S.TrackPlayLikeSvg>
                                        </S.TrackPlayLike>
                                        <S.TrackPlayDislike>
                                            <S.TrackPlayDislikeSvg
                                                alt="dislike"
                                                onClick={
                                                    alertFunctionIsNotReady
                                                }
                                            >
                                                <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                                            </S.TrackPlayDislikeSvg>
                                        </S.TrackPlayDislike>
                                    </S.TrackPlayLikeDis>
                                </S.PlayerTrackPlay>
                            </S.BarPlayer>
                            <S.BarVolumeBlock>
                                <S.VolumeContent>
                                    <S.VolumeImage>
                                        <S.VolumeSvg
                                            alt="volume"
                                            onClick={alertFunctionIsNotReady}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                                        </S.VolumeSvg>
                                    </S.VolumeImage>
                                    <S.VolumeProgress>
                                        <S.VolumeProgressLine
                                            type="range"
                                            name="range"
                                            ref={volumeBarRef}
                                            value={currentVolume}
                                            min={0}
                                            max={1}
                                            step={0.01}
                                            onChange={() => {
                                                setCurrentVolume(
                                                    audioRef.current.volume,
                                                )
                                                audioRef.current.volume =
                                                    volumeBarRef.current.value
                                            }}
                                        />
                                    </S.VolumeProgress>
                                </S.VolumeContent>
                            </S.BarVolumeBlock>
                        </S.BarPlayerBlock>
                    </S.BarContent>
                </S.Bar>
            </>
        )
    )
}
