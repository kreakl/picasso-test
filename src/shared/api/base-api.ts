import {
  createApi, fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { config } from '@/shared/lib';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: config.API_ENDPOINT }),
  endpoints: () => ({}),
});
