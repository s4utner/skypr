import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        activeTrack: {},
        tracks: [],
    },
    reducers: {
        setTracks(state, action) {
            state.tracks = action.payload.tracks
        },
        setActiveTrack(state, action) {
            state.activeTrack = action.payload.track
        },
        playNextTrack(state, action) {
            const indexCurrentTrack = state.tracks.findIndex((track) => {
                return track.id === action.payload.activeTrackId
            })
            state.activeTrack = state.tracks[indexCurrentTrack + 1]
        },
        playPrevTrack(state, action) {
            const indexCurrentTrack = state.tracks.findIndex((track) => {
                return track.id === action.payload.activeTrackId
            })
            state.activeTrack = state.tracks[indexCurrentTrack - 1]
        },
        playRandomTrack(state, action) {},
    },
})

export const {
    setActiveTrack,
    playNextTrack,
    playPrevTrack,
    playRandomTrack,
    setTracks,
} = trackSlice.actions

export const trackReducer = trackSlice.reducer
