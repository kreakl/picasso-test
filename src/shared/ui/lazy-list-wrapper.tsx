import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList } from 'react-window';
import { CSSProperties, ReactNode } from 'react';

type LazyListWrapperProps = {
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  total: number;
  loadNextPage: () => void;
  children: ({ index, style, isLoading }: { index: number, style: CSSProperties, isLoading: boolean }) => ReactNode;
};

export function LazyListWrapper({
  hasNextPage,
  isNextPageLoading,
  total,
  loadNextPage,
  children,
}: LazyListWrapperProps) {
  const itemsCount = hasNextPage ? total + 1 : total;
  const isItemLoaded = (index: number)  => !hasNextPage || index < total;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemsCount}
      loadMoreItems={loadNextPage}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={500}
          itemSize={300}
          width={1000}
          itemCount={itemsCount}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {({ index, style }) => children({ index, style, isLoading: !isItemLoaded(index) })}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
};
