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

        getFavTracks: builder.query({
            query: () => {
                return {
                    url: 'track/favorite/all/',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken',
                        )}`,
                    },
                }
            },
        }),

        setLike: builder.mutation({
            query: (id) => {
                return {
                    url: `/track/${id}/favorite/`,
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken',
                        )}`,
                    },
                }
            },
        }),

        removeLike: builder.mutation({
            query: (id) => {
                return {
                    url: `/track/${id}/favorite/`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'accessToken',
                        )}`,
                    },
                }
            },
        }),
    }),
})

export const { useGetAllTracksQuery, useGetFavTracksQuery, useSetLikeMutation, useRemoveLikeMutation } = musicApi
