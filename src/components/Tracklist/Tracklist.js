import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { Track } from '../Track/Track.js'
import { compareAsc, compareDesc } from 'date-fns'

const Tracklist = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    playlist,
    setLoadingTracksError,
    setIsLoading,
    categoryId,
    searchText,
    tracks,
    selectedAuthors,
    selectedGenres,
    selectedSort,
}) => {
    const getFilteredTracks = () => {
        let allTracks = tracks

        if (searchText.split('').length > 0) {
            allTracks = allTracks.filter(
                (track) =>
                    track.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    track.author
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    track.album
                        .toLowerCase()
                        .includes(searchText.toLowerCase()),
            )

            setLoadingTracksError('')
        }

        if (selectedAuthors.length > 0) {
            allTracks = allTracks.filter((track) =>
                selectedAuthors.includes(track.author),
            )

            setLoadingTracksError('')
        }

        if (selectedGenres.length > 0) {
            allTracks = allTracks.filter((track) =>
                selectedGenres.includes(track.genre),
            )

            setLoadingTracksError('')
        }

        if (selectedSort === 'Сначала новые') {
            allTracks = [...allTracks].sort((a, b) =>
                compareDesc(new Date(a.release_date), new Date(b.release_date)),
            )
        }

        if (selectedSort === 'Сначала старые') {
            allTracks = [...allTracks].sort((a, b) =>
                compareAsc(new Date(a.release_date), new Date(b.release_date)),
            )
        }

        return allTracks
    }

    const filteredTracks = getFilteredTracks()

    return (
        <S.ContentPlaylist>
            {loadingTracksError && (
                <S.LoadingTracksError>
                    {loadingTracksError}
                </S.LoadingTracksError>
            )}
            {filteredTracks.map((track) => {
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
