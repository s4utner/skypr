import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { convertSecondsToMinutesAndSeconds } from '../../helpers.js'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTrack } from '../../store/slices.js'
import { useState } from 'react'

const Tracklist = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    setIsLoading,
    setLoadingTracksError,
    data,
    error,
    loading,
}) => {
    const [isLiked, setIsLiked] = useState(false)
    const activeTrack = useSelector((state) => state.tracks.activeTrack)
    const dispatch = useDispatch()

    const isEmptyTracklist = !isLoading && !data?.length

    if (loading) {
        setIsLoading(true)
    }

    if (error) {
        setLoadingTracksError(`${error.message}`)
    }

    if (isEmptyTracklist) {
        setLoadingTracksError(`Треков нет...`)
    }

    return (
        <S.ContentPlaylist>
            {loadingTracksError && (
                <S.LoadingTracksError>
                    {loadingTracksError}
                </S.LoadingTracksError>
            )}
            {data.map((track) => {
                return (
                    <S.PlaylistItem
                        key={track.id}
                        onClick={() => {
                            setIsPlayerVisible(true)
                            dispatch(setActiveTrack({ track }))
                        }}
                    >
                        <S.PlaylistTrack>
                            <S.TrackTitle>
                                <S.TrackTitleImage>
                                    {isLoading ? (
                                        <Skeleton
                                            width={55}
                                            height={55}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : activeTrack.id === track.id ? (
                                        <S.ActiveTrack />
                                    ) : (
                                        <S.TrackTitleSvg alt="music">
                                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                        </S.TrackTitleSvg>
                                    )}
                                </S.TrackTitleImage>
                                <div>
                                    {isLoading ? (
                                        <Skeleton
                                            width={270}
                                            baseColor="#202020"
                                            highlightColor="#444"
                                        />
                                    ) : (
                                        <S.TrackTitleLink href="http://">
                                            {track.name}
                                            <S.TrackTitleSpan></S.TrackTitleSpan>
                                        </S.TrackTitleLink>
                                    )}
                                </div>
                            </S.TrackTitle>
                            <S.TrackAuthor>
                                {isLoading ? (
                                    <Skeleton
                                        width={270}
                                        baseColor="#202020"
                                        highlightColor="#444"
                                    />
                                ) : (
                                    <S.TrackAuthorLink href="http://">
                                        {track.author}
                                    </S.TrackAuthorLink>
                                )}
                            </S.TrackAuthor>
                            <S.TrackAlbum>
                                {isLoading ? (
                                    <Skeleton
                                        width={200}
                                        baseColor="#202020"
                                        highlightColor="#444"
                                    />
                                ) : (
                                    <S.TrackAlbumLink href="http://">
                                        {track.album}
                                    </S.TrackAlbumLink>
                                )}
                            </S.TrackAlbum>
                            <div>
                                {isLoading ? (
                                    <Skeleton
                                        width={60}
                                        baseColor="#202020"
                                        highlightColor="#444"
                                    />
                                ) : (
                                    <>
                                        <S.TrackTimeSvg
                                            $isLiked={isLiked}
                                            alt="time"
                                            onClick={(event) => {
                                                event.stopPropagation()
                                                setIsLiked(!isLiked)
                                            }}
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                        </S.TrackTimeSvg>
                                        <S.TrackTimeText>
                                            {convertSecondsToMinutesAndSeconds(
                                                track.duration_in_seconds,
                                            )}
                                        </S.TrackTimeText>
                                    </>
                                )}
                            </div>
                        </S.PlaylistTrack>
                    </S.PlaylistItem>
                )
            })}
        </S.ContentPlaylist>
    )
}

export default Tracklist
