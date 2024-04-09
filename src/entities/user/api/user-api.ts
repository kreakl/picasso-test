import { User } from '@/entities/user/model/types';
import { baseApi } from '@/shared/api';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<User, number>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
