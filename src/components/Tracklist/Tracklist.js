import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { Track } from '../Track/Track.js'
import { useSelector } from 'react-redux'

const Tracklist = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    playlist,
    setLoadingTracksError,
    setIsLoading,
    categoryId,
    searchText,
}) => {
    const tracks = useSelector((state) => state.tracks.tracks)

    if (searchText) {
        const filteredTracks = tracks.filter((track) =>
            track.name.toLowerCase().includes(searchText.toLowerCase()),
        )

        console.log(filteredTracks)
    }

    return (
        <S.ContentPlaylist>
            {loadingTracksError && (
                <S.LoadingTracksError>
                    {loadingTracksError}
                </S.LoadingTracksError>
            )}
            {tracks.map((track) => {
                return (
                    <Track
                        key={track.id}
                        track={track}
                        setIsPlayerVisible={setIsPlayerVisible}
                        isLoading={isLoading}
                        playlist={playlist}
                        setLoadingTracksError={setLoadingTracksError}
                        setIsLoading={setIsLoading}
                        categoryId={categoryId}
                    />
                )
            })}
        </S.ContentPlaylist>
    )
}

export default Tracklist
