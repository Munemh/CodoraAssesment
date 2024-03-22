import {getConfig} from '@/backend/apiManager/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { store } from '@/redux/store';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: getConfig(), 
    prepareHeaders: async (headers) => {
      const user = false
      if (user) {
        // headers.set('Authorization', `JWT ${user.userToken}`)
      }

      headers.set('Content-Type', 'application/json')

      return headers
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'api',
})