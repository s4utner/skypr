import { createSlice } from '@reduxjs/toolkit'

const trackSlice = createSlice({
    name: 'tracks',
    initialState: {
        activeTrack: {},
        tracks: [],
        shuffledTracks: [],
        isShuffled: false,
    },
    reducers: {
        setTracks(state, action) {
            state.tracks = action.payload.tracks
            state.shuffledTracks = [...action.payload.tracks].sort(
                () => Math.random() - 0.5,
            )
            console.log(state.tracks)
            console.log(state.shuffledTracks)
        },
        setActiveTrack(state, action) {
            state.activeTrack = action.payload.track
        },
        setIsShuffled(state) {
            state.isShuffled = !state.isShuffled
            if (state.isShuffled) {
                state.shuffledTracks.sort(() => Math.random() - 0.5)
            }
        },
        playNextTrack(state, action) {
            const playlist = state.isShuffled
                ? state.shuffledTracks
                : state.tracks

            const indexCurrentTrack = playlist.findIndex((track) => {
                return track.id === action.payload.activeTrack
            })

            if (playlist[indexCurrentTrack + 1]) {
                state.activeTrack = playlist[indexCurrentTrack + 1]
            }
        },
        playPrevTrack(state, action) {
            const playlist = state.isShuffled
                ? state.shuffledTracks
                : state.tracks

            const indexCurrentTrack = playlist.findIndex((track) => {
                return track.id === action.payload.activeTrack
            })

            if (playlist[indexCurrentTrack] !== 0) {
                state.activeTrack = playlist[indexCurrentTrack - 1]
            }
        },
    },
})

export const {
    setActiveTrack,
    setIsShuffled,
    playNextTrack,
    playPrevTrack,
    setTracks,
} = trackSlice.actions

export const trackReducer = trackSlice.reducer
