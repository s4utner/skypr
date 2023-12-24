import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { convertSecondsToMinutesAndSeconds } from '../../helpers'
import { setActiveTrack } from '../../store/slices'
import * as S from './TrackStyles.js'
import {
    useSetLikeMutation,
    useRemoveLikeMutation,
} from '../../services/musicApi'

export const Track = ({ track, setIsPlayerVisible, isLoading, playlist }) => {
    const [like, { isSuccess: isLikeSuccess }] = useSetLikeMutation()
    const [dislike, { isSuccess: isDislikeSuccess }] = useRemoveLikeMutation()

    let isLiked = track?.stared_user?.some(
        ({ username }) => username === JSON.parse(localStorage.getItem('user')),
    )

    const handleLikeClick = (id) => {
        isLiked ? dislike(id) : like(id)
    }

    const dispatch = useDispatch()
    const activeTrack = useSelector((state) => state.tracks.activeTrack)

    if (playlist === 'fav') {
        isLiked = true
    }

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
                                    handleLikeClick(track.id)
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
}
