import { baseApi } from '@/shared/api';
import { Comment } from '../model/types';

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<Comment[], number>({
      query: (postId) => ({
        url: '/comments',
        params: {
          postId,
        },
      }),
    }),
  }),
});

export const { useGetCommentsByPostIdQuery } = postApi;
