import { configureStore } from '@reduxjs/toolkit'
import { trackReducer } from './slices'
import { musicApi } from '../services/musicApi'

export default configureStore({
    reducer: {
        tracks: trackReducer,
        [musicApi.reducerPath]: musicApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(musicApi.middleware),
})
