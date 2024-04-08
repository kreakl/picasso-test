import { createBrowserRouter } from 'react-router-dom';
import { config } from '@/shared/lib';
import { MainPage } from '@/page/main';
import { PostPage } from '@/page/post';
import { Root } from '@/page/root';

export const router = createBrowserRouter([
  {
    path: `${config.BASE_URL}`,
    element: <Root />,
    children: [
      {
        path: '',
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
