import { createHashRouter } from 'react-router-dom';
import { MainPage } from '@/page/main';
import { PostPage } from '@/page/post';
import { Root } from '@/page/root';

export const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'post/:postId',
        element: <PostPage />,
        loader: ({ params }) => ({ postId: Number((params as { postId: string }).postId) }),
      },
    ],
  },
]);
