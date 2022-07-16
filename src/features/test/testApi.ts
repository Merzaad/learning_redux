// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Coin = any
export const coinApi = createApi({
  reducerPath: 'coinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.blockchair.com/' }),
  endpoints: (builder) => ({
    getCoin: builder.query<Coin, string>({
      query: (coin) => `${coin}/stats`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinQuery } = coinApi
