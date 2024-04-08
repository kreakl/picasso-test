import { createContextProvider } from '@/shared/lib';

export type PostContext = {
  index?: number;
  title?: string;
  body?: string;
  isLoading?: boolean;
};

export const { Provider: PostProvider, useContext: usePostContext } = createContextProvider<PostContext>('Post');
