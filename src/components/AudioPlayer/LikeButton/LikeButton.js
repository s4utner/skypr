import * as S from './LikeButtonStyles'
import { useSelector, useDispatch } from 'react-redux'
import {
    setLike,
    removeLike,
    refreshToken,
    getPlaylist,
    getAllTracks,
    getFavTracks,
} from '../../../Api'
import { setTracks } from '../../../store/slices'

export const LikeButton = ({
    setLoadingTracksError,
    setIsLoading,
    playlist,
}) => {
    const dispatch = useDispatch()

    const activeTrack = useSelector((state) => state.tracks.activeTrack)

    let isLiked = activeTrack?.stared_user?.some(
        ({ username }) => username === JSON.parse(localStorage.getItem('user')),
    )

    if (!activeTrack.stared_user) {
        isLiked = true
    }

    const handleLike = (id, categoryId) => {
        setLike(id)
            .then((response) => {
                if (response.status === 401) {
                    refreshToken()
                        .then((response) => {
                            return response.json()
                        })
                        .then((response) => {
                            localStorage.setItem('accessToken', response.access)
                        })
                        .then(() => {
                            setLike(id)
                        })
                } else if (response.status !== 200) {
                    console.log('Произошла ошибка')
                }
            })
            .then(() => {
                if (playlist === 'fav') {
                    getFavTracks()
                        .then((response) => {
                            return response.json()
                        })
                        .then((tracks) => {
                            dispatch(setTracks({ tracks }))
                        })
                        .then(() => {
                            setLoadingTracksError('')
                            setIsLoading(false)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                } else if (playlist === 'main') {
                    getAllTracks()
                        .then((tracks) => {
                            dispatch(setTracks({ tracks }))
                        })
                        .then(() => {
                            setLoadingTracksError('')
                            setIsLoading(false)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                } else {
                    getPlaylist(categoryId)
                        .then((tracks) => {
                            dispatch(setTracks({ tracks }))
                        })
                        .then(() => {
                            setLoadingTracksError('')
                            setIsLoading(false)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
    }

    const handleRemoveLike = (id, categoryId) => {
        removeLike(id)
            .then((response) => {
                if (response.status === 401) {
                    refreshToken()
                        .then((response) => {
                            return response.json()
                        })
                        .then((response) => {
                            localStorage.setItem('accessToken', response.access)
                        })
                        .then(() => {
                            removeLike(id)
                        })
                } else if (response.status !== 200) {
                    console.log('Произошла ошибка')
                }
            })
            .then(() => {
                if (playlist === 'fav') {
                    getFavTracks()
                        .then((response) => {
                            return response.json()
                        })
                        .then((tracks) => {
                            dispatch(setTracks({ tracks }))
                        })
                        .then(() => {
                            setLoadingTracksError('')
                            setIsLoading(false)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                } else if (playlist === 'main') {
                    getAllTracks()
                        .then((tracks) => {
                            dispatch(setTracks({ tracks }))
                        })
                        .then(() => {
                            setLoadingTracksError('')
                            setIsLoading(false)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                } else {
                    getPlaylist(categoryId)
                        .then((tracks) => {
                            dispatch(setTracks({ tracks }))
                        })
                        .then(() => {
                            setLoadingTracksError('')
                            setIsLoading(false)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
    }

    const handleLikeClick = (id, categoryId) => {
        isLiked ? handleRemoveLike(id, categoryId) : handleLike(id, categoryId)
        isLiked = !isLiked
    }
    return (
        <S.TrackPlayLikeDis>
            <S.TrackPlayLike>
                <S.TrackPlayLikeSvg
                    alt="like"
                    $isLiked={isLiked}
                    onClick={(event) => {
                        event.stopPropagation()
                        handleLikeClick(activeTrack.id)
                    }}
                >
                    <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                </S.TrackPlayLikeSvg>
            </S.TrackPlayLike>
            <S.TrackPlayDislike>
                <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                </S.TrackPlayDislikeSvg>
            </S.TrackPlayDislike>
        </S.TrackPlayLikeDis>
    )
}
