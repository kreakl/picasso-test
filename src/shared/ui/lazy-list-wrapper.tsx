import { CSSProperties, ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

type LazyListWrapperProps = {
  hasNextPage?: boolean;
  isNextPageLoading?: boolean;
  total: number;
  loadNextPage: () => void;
  children: ({ index, style, isLoading }: {
    index: number,
    style: CSSProperties,
    isLoading: boolean
  }) => ReactNode;
};

export function LazyListWrapper({
  hasNextPage,
  isNextPageLoading,
  total,
  loadNextPage,
  children,
}: LazyListWrapperProps) {
  const itemsCount = hasNextPage ? total + 1 : total;
  const isItemLoaded = (index: number) => !hasNextPage || index < total;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemsCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <AutoSizer>
          {({ width, height }) => (
            <FixedSizeList
              height={height}
              itemSize={300}
              width={width}
              itemCount={itemsCount}
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {({ index, style }) => children({ index, style, isLoading: !isItemLoaded(index) })}
            </FixedSizeList>
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
}
