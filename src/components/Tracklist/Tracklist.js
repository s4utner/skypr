import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { useEffect } from 'react'
import { Track } from '../Track/Track.js'

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
    useEffect(() => {
        if (loading) {
            setIsLoading(true)
        }

        if (error) {
            setLoadingTracksError(`${error.message}`)
        }
    })

    return (
        <S.ContentPlaylist>
            {loadingTracksError && (
                <S.LoadingTracksError>
                    {loadingTracksError}
                </S.LoadingTracksError>
            )}
            {data.map((track) => {
                return (
                    <Track
                        key={track.id}
                        track={track}
                        setIsPlayerVisible={setIsPlayerVisible}
                        isLoading={isLoading}
                    />
                )
            })}
        </S.ContentPlaylist>
    )
}

export default Tracklist
