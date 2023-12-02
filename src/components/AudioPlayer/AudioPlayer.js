import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './AudioPlayerStyles.js'

export const AudioPlayer = ({
    isPlayerVisible,
    isLoading,
    activeTrack,
    audioRef,
    togglePlay,
    isPlaying,
}) => {
    console.log(activeTrack)

    return (
        isPlayerVisible && (
            <>
                <audio
                    controls
                    src={activeTrack ? activeTrack.track_file : ''}
                    ref={audioRef}
                ></audio>
                <S.Bar>
                    <S.BarContent>
                        <S.BarPlayerProgress></S.BarPlayerProgress>
                        <S.BarPlayerBlock>
                            <S.BarPlayer>
                                <S.PlayerControls>
                                    <S.PlayerButtonPrev>
                                        <S.PlayerButtonPrevSvg alt="prev">
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
                                        <S.PlayerButtonNextSvg alt="next">
                                            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                                        </S.PlayerButtonNextSvg>
                                    </S.PlayerButtonNext>
                                    <S.PlayerButtonRepeat>
                                        <S.PlayerButtonRepeatSvg alt="repeat">
                                            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                                        </S.PlayerButtonRepeatSvg>
                                    </S.PlayerButtonRepeat>
                                    <S.PlayerButtonShuffle>
                                        <S.PlayerButtonShuffleSvg alt="shuffle">
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
                                            <S.TrackPlayLikeSvg alt="like">
                                                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                            </S.TrackPlayLikeSvg>
                                        </S.TrackPlayLike>
                                        <S.TrackPlayDislike>
                                            <S.TrackPlayDislikeSvg alt="dislike">
                                                <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                                            </S.TrackPlayDislikeSvg>
                                        </S.TrackPlayDislike>
                                    </S.TrackPlayLikeDis>
                                </S.PlayerTrackPlay>
                            </S.BarPlayer>
                            <S.BarVolumeBlock>
                                <S.VolumeContent>
                                    <S.VolumeImage>
                                        <S.VolumeSvg alt="volume">
                                            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                                        </S.VolumeSvg>
                                    </S.VolumeImage>
                                    <S.VolumeProgress>
                                        <S.VolumeProgressLine
                                            type="range"
                                            name="range"
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
