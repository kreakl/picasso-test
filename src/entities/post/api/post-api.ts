import { Post } from '@/entities/post/model/types';
import { baseApi } from '@/shared/api';

const POST_COUNT = 0;

export const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostById: builder.query<Post, number>({
      query: (id) => ({
        url: `/posts/${id}`,
      }),
    }),
    getAllPosts: builder.query<{ data: Post[], totalCount: number },
    { start: number, limit: number }>({
      query: ({ start, limit }) => ({
        url: '/posts',
        params: {
          _start: start,
          _limit: limit,
        },
      }),
      transformResponse(data: Post[], meta) {
        return {
          data,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count')) || POST_COUNT,
        };
      },
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        Object.assign(currentCache, {
          ...newItems,
          data: [...currentCache.data, ...newItems.data],
        });
      },
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg && previousArg) {
          return currentArg.start > previousArg.start;
        }

        return true;
      },
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;
