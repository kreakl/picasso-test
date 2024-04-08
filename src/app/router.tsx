import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from '@/page/main';
import { PostPage } from '@/page/post';
import { Root } from '@/page/root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/post/:postId',
        element: <PostPage/>,
        loader: ({params}) => {
          return {postId: Number((params as { postId: string }).postId)}
        }
      }
    ]
  }
]);
