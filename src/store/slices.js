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
        setPlayingTrack(state, action) {
            state.activeTrack = action.payload.track
        },
        playNextTrack(state, action) {
            state.activeTrack = state.tracks[state.activeTrack.id + 2]
        },
        playPrevTrack(state, action) {},
        playRandomTrack(state, action) {},
    },
})

export const {
    setPlayingTrack,
    playNextTrack,
    playPrevTrack,
    playRandomTrack,
    setTracks,
} = trackSlice.actions

export const trackReducer = trackSlice.reducer
