import ReactPaginate from 'react-paginate';
import '../styles/paginate.css';
import Button from './Button';

interface Props {
  currentPage: number;
  totalElements: number;
  changePageHandler: (event: { selected: number }) => void;
}

export default function Paginate({
  totalElements,
  changePageHandler,
  currentPage,
}: Props) {
  const isFirstPage = currentPage === 0;
  const isLastPage = totalElements === currentPage + 1;

  const pageLabelBuilder = (page: number) => {
    return `Page ${page} of ${totalElements}`;
  };
  return (
    <ReactPaginate
      pageCount={totalElements}
      pageRangeDisplayed={0}
      marginPagesDisplayed={0}
      previousLabel={<Button bgColor='bg-uRed'>Previous</Button>}
      nextLabel={<Button bgColor='bg-uRed'>Next</Button>}
      onPageChange={changePageHandler}
      containerClassName='pagination-ul'
      activeClassName='current-page'
      previousLinkClassName={isFirstPage ? 'hidden-button' : ''}
      nextLinkClassName={isLastPage ? 'hidden-button' : ''}
      pageLabelBuilder={pageLabelBuilder} // 커스터마이징된 라벨 생성 함수 전달
    />
  );
}
