import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { Track } from '../Track/Track.js'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

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
    const [filterResult, setFilterResult] = useState([])

    useEffect(() => {
        if (searchText) {
            const filteredTracks = tracks.filter(
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

            setFilterResult(filteredTracks)
        } else {
            setFilterResult(tracks)
        }
    }, [setFilterResult, searchText, tracks])

    return (
        <S.ContentPlaylist>
            {loadingTracksError && (
                <S.LoadingTracksError>
                    {loadingTracksError}
                </S.LoadingTracksError>
            )}
            {filterResult.length > 0
                ? filterResult.map((track) => {
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
                  })
                : tracks.map((track) => {
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
