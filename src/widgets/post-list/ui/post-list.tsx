import { useState } from 'react';
import { useGetAllPostsQuery } from '@/entities/post';
import { PostCard } from '@/entities/post';
import { LazyListWrapper } from '@/shared/ui/lazy-list-wrapper';

const START = 0;
const LIMIT = 10;

export function PostList() {
  const [start, setStart] = useState(START);
  const { data, isFetching  } = useGetAllPostsQuery({ start: start, limit: LIMIT });
  const { data: posts = [], totalCount = LIMIT } = data || {};
  const hasNextPage = start < totalCount - LIMIT;

  return (
    <>
      <LazyListWrapper
        isNextPageLoading={isFetching}
        loadNextPage={() => setStart((start) => start + LIMIT)}
        total={posts.length}
        hasNextPage={hasNextPage}
      >
        {({ index, style , isLoading }) => (
          <div style={style}>
            <PostCard
              index={index + 1}
              title={posts[index]?.title}
              body={posts[index]?.body}
              isLoading={isLoading}
            />
          </div>
          )
        }
      </LazyListWrapper>
    </>
  );
}
