import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
            query: () => 'track/all/',
        }),
    }),
})

export const { useGetAllTracksQuery } = musicApi
