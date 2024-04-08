import { useState } from 'react';
import {
  PostCardBottomAction,
  PostCardContent,
  PostCardHeader,
  useGetAllPostsQuery
} from '@/entities/post';
import { PostCard } from '@/entities/post';
import { LazyListWrapper } from '@/shared/ui/lazy-list-wrapper';
import { Link } from 'react-router-dom';

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
        {({ index, style, isLoading  }) => (
          <div className="flex flex-col" style={style}>
            <PostCard
              index={index + 1}
              title={posts[index]?.title}
              body={posts[index]?.body}
              isLoading={isLoading}
            >
              <PostCardHeader />
              <PostCardContent />
              <PostCardBottomAction>
                <Link to={`/post/${posts[index].id}`}>Просмотр</Link>
              </ PostCardBottomAction>
            </PostCard>
          </div>
          )
        }
      </LazyListWrapper>
    </>
  );
}
