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
            state.shuffledTracks = action.payload.tracks
            state.shuffledTracks = state.shuffledTracks.sort(
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
        },
        playNextTrack(state, action) {
            const indexCurrentTrack = state.isShuffled
                ? state.shuffledTracks.findIndex((track) => {
                      return track.id === action.payload.activeTrack
                  })
                : state.tracks.findIndex((track) => {
                      return track.id === action.payload.activeTrackId
                  })
            state.activeTrack = state.isShuffled
                ? state.shuffledTracks[indexCurrentTrack - 1]
                : state.tracks[indexCurrentTrack + 1]
        },
        playPrevTrack(state, action) {
            const indexCurrentTrack = state.isShuffled
                ? state.shuffledTracks.findIndex((track) => {
                      return track.id === action.payload.activeTrack
                  })
                : state.tracks.findIndex((track) => {
                      return track.id === action.payload.activeTrackId
                  })
            state.activeTrack = state.isShuffled
                ? state.shuffledTracks[indexCurrentTrack - 1]
                : state.tracks[indexCurrentTrack - 1]
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
