import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PostCardBottomAction,
  PostCardContent,
  PostCardHeader,
  useGetAllPostsQuery,
  PostCard,
} from '@/entities/post';
import { LazyListWrapper } from '@/shared/ui/lazy-list-wrapper';

const LIMIT = 10;
const START = 0;

export function PostList() {
  const [start, setStart] = useState(START);
  const { data, isFetching } = useGetAllPostsQuery({ start, limit: LIMIT });
  const { data: posts = [], totalCount = LIMIT } = data || {};

  const hasNextPage = posts.length < totalCount;

  return (
    <LazyListWrapper
      isNextPageLoading={isFetching}
      loadNextPage={() => setStart(() => posts.length)}
      total={posts.length}
      hasNextPage={hasNextPage}
    >
      {({ index, style, isLoading }) => (
        <div style={style}>
          <PostCard
            index={posts[index]?.id}
            title={posts[index]?.title}
            body={posts[index]?.body}
            isLoading={isLoading}
            variant="clamped"
          >
            <PostCardHeader />
            <PostCardContent />
            <PostCardBottomAction>
              <Link to={`./post/${posts[index]?.id}`}>Просмотр</Link>
            </PostCardBottomAction>
          </PostCard>
        </div>
      )}
    </LazyListWrapper>
  );
}
