import { LoadMoreBtn } from './LoadMore.styled';

export const LoadMore = ({ loadMore }) => {
  return (
    <>
      <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
    </>
  );
};
