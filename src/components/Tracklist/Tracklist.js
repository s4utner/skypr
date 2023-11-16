import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { getAllTracks } from '../../Api.js'

const Tracklist = () => {
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
            setIsLoading(true)
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
        <S.ContentPlaylist>
            {loadingTracksError && (
                <S.LoadingTracksError>
                    При загрузке треков произошла ошибка. <br />
                    Попробуй повторить попытку позднее
                </S.LoadingTracksError>
            )}
            {tracks.map((track) => {
                return (
                    <S.PlaylistItem key={track.id}>
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
                                        <S.TrackTimeSvg alt="time">
                                            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                        </S.TrackTimeSvg>
                                        <S.TrackTimeText>
                                            {track.duration_in_seconds}
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
