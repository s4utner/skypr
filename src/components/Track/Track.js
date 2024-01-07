import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { convertSecondsToMinutesAndSeconds } from '../../helpers'
import { setActiveTrack, setCurrentPlaylist } from '../../store/slices'
import * as S from './TrackStyles.js'
import {
    removeLike,
    setLike,
    refreshToken,
    getFavTracks,
    getAllTracks,
    getPlaylist,
} from '../../Api'
import { setTracks } from '../../store/slices'

export const Track = ({
    track,
    setIsPlayerVisible,
    isLoading,
    playlist,
    setLoadingTracksError,
    setIsLoading,
}) => {
    const dispatch = useDispatch()

    const activeTrack = useSelector((state) => state.tracks.activeTrack)
    const categoryId = useSelector((state) => state.tracks.categoryId)

    let isLiked = track?.stared_user?.some(
        ({ username }) => username === JSON.parse(localStorage.getItem('user')),
    )

    if (playlist === 'fav') {
        isLiked = true
    }

    async function handleLike(id) {
        let response = await setLike(id)

        if (response.status === 401) {
            const tokensResponse = await refreshToken()
            const tokens = await tokensResponse.json()
            localStorage.setItem('accessToken', tokens.access)
            response = await setLike(id)
        } else if (response.status !== 200) {
            console.log('Произошла ошибка')
        }

        if (playlist === 'fav') {
            const tracksResponse = await getFavTracks()
            const tracks = await tracksResponse.json()
            dispatch(setTracks({ tracks }))
            setLoadingTracksError('')
            setIsLoading(false)
        } else if (playlist === 'main') {
            const tracks = await getAllTracks()
            dispatch(setTracks({ tracks }))
            setLoadingTracksError('')
            setIsLoading(false)
        } else {
            const tracks = await getPlaylist(categoryId)
            dispatch(setTracks({ tracks }))
            setLoadingTracksError('')
            setIsLoading(false)
        }
    }

    async function handleRemoveLike(id) {
        let response = await removeLike(id)

        if (response.status === 401) {
            const tokensResponse = await refreshToken()
            const tokens = await tokensResponse.json()
            localStorage.setItem('accessToken', tokens.access)
            response = await removeLike(id)
        } else if (response.status !== 200) {
            console.log('Произошла ошибка')
        }

        if (playlist === 'fav') {
            const tracksResponse = await getFavTracks()
            const tracks = await tracksResponse.json()
            dispatch(setTracks({ tracks }))
            setLoadingTracksError('')
            setIsLoading(false)
        } else if (playlist === 'main') {
            const tracks = await getAllTracks()
            dispatch(setTracks({ tracks }))
            setLoadingTracksError('')
            setIsLoading(false)
        } else {
            const tracks = await getPlaylist(categoryId)
            dispatch(setTracks({ tracks }))
            setLoadingTracksError('')
            setIsLoading(false)
        }
    }

    const handleLikeClick = (id) => {
        isLiked ? handleRemoveLike(id) : handleLike(id)
    }

    return (
        <S.PlaylistItem
            key={track.id}
            onClick={() => {
                setIsPlayerVisible(true)
                dispatch(setCurrentPlaylist())
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
                                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
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
                                    handleLikeClick(track.id)
                                }}
                            >
                                <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
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
}
