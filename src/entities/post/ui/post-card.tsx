import { clsx } from 'clsx';
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
          <div className="px-2 py-4 md:px-4 md:py-6 text-gray-100 text-4xl">Loading...</div>
        ) : (
          <div className="px-2 py-4 md:px-4 md:py-6">
            {children}
          </div>
        )
      }
    </PostProvider>
  );
}

export function PostCardHeader() {
  const { title, index, variant } = usePostContext();

  return (
    <div
      className="text-4xl flex gap-2 md:gap-4 items-center capitalize"
    >
      {index && (
        <div className="text-gray-400">{index}</div>
      )}
      <h2
        className={clsx('font-semibold text-gray-200', {
          'overflow-ellipsis whitespace-nowrap overflow-hidden': variant === 'clamped',
        })}
      >
        {title}
      </h2>
    </div>
  );
}

export function PostCardContent() {
  const { body, variant } = usePostContext();

  return (
    <div className={clsx('', { 'line-clamp-2': variant === 'clamped' })}>
      <p className="mt-3 text-2xl text-gray-500 capitalize">
        {body}
      </p>
    </div>
  );
}

export function PostCardBottomAction({ children }: PropsWithChildren) {
  return (
    <div className="mt-2 md:px-4 text-2xl text-cyan-700 cursor-pointer underline underline-offset-4">
      {children}
    </div>
  );
}
