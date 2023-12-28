import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './TracklistStyles.js'
import { Track } from '../Track/Track.js'

const Tracklist = ({
    isLoading,
    setIsPlayerVisible,
    loadingTracksError,
    data,
    playlist,
}) => {

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
                        playlist={playlist}
                    />
                )
            })}
        </S.ContentPlaylist>
    )
}

export default Tracklist
