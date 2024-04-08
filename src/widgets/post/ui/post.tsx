import { Link } from 'react-router-dom';
import {
  PostCard,
  PostCardBottomAction,
  PostCardContent,
  PostCardHeader,
  useGetPostByIdQuery
} from '@/entities/post';
import { useGetUserByIdQuery } from '@/entities/user';

type PostProps = {
  postId: number;
}

export function Post({ postId }: PostProps) {
  const { data: post, isSuccess } = useGetPostByIdQuery(postId);
  const { data: user } = useGetUserByIdQuery(post?.userId || 0, { skip: !isSuccess });

  return (
    <PostCard
      title={post?.title}
      body={post?.body}
    >
      <PostCardHeader />
      <div className="my-3">
        <div className="text-gray-200">
          {user?.name}
        </div>
        <div className="text-cyan-500">
          {user?.email}
        </div>
      </div>
      <PostCardContent />
      <PostCardBottomAction>
        <Link to="/">Назад</Link>
      </ PostCardBottomAction>
    </PostCard>
  );
}
