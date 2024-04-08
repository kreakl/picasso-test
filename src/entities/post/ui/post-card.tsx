import { PropsWithChildren, ReactNode } from 'react';
import { PostContext, PostProvider, usePostContext } from '@/entities/post/model/post-context';

type PostCardProps = PostContext & {
  children: ReactNode;
};

export function PostCard({ children, ...props }: PostCardProps) {
  const { isLoading } = props;

  return (
    <PostProvider value={props}>
      {
        isLoading ? (
          <div className="px-4 py-6 text-gray-100 text-4xl">Loading...</div>
        ) : (
          <div className="px-4 py-6">
            {children}
          </div>
        )
      }
    </PostProvider>
  );
}

export function PostCardHeader() {
  const { title, index } = usePostContext();

  return (
    <div
      className="flex gap-4 items-center capitalize "
    >
      <div className="text-4xl text-gray-400">{index}</div>
      <h2
        className=" text-4xl font-semibold text-gray-200 overflow-ellipsis whitespace-nowrap overflow-hidden"
      >
        {title}
      </h2>
    </div>
  );
}

export function PostCardContent() {
  const { body } = usePostContext();

  return (
    <div className="line-clamp-2">
      <p className="mt-3 text-2xl text-gray-500 capitalize">
        {body}
      </p>
    </div>
  );
}

export function PostCardBottomAction({ children }: PropsWithChildren) {
  return (
    <div className="px-4 text-2xl text-cyan-700 cursor-pointer underline underline-offset-2">
      {children}
    </div>
  );
}
