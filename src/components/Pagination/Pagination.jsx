import React from 'react';
import ReactPaginate from 'react-paginate';

import { changePageNumber, selectFilters } from '../../redux/slices/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Pagination.module.scss';

const Pagination = ({ itemsCount }) => {
  const { filterType, searchValue, currentPageNumber } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onPageChange = (pageNumber) => {
    console.log('change');
    dispatch(changePageNumber(pageNumber));
  };

  React.useEffect(() => {
    onPageChange(1);
  }, [filterType, searchValue]);

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={5}
      forcePage={currentPageNumber - 1}
      pageCount={Math.ceil(itemsCount / 6)}
      previousLabel='<'
      renderOnZeroPageCount={null}
      containerClassName={styles.wrapper}
      pageClassName={styles.page_item}
      pageLinkClassName={styles.page_link}
      activeLinkClassName={styles.page_active}
      previousClassName={styles.previous_item}
      nextClassName={styles.next_item}
      previousLinkClassName={styles.previous_link}
      nextLinkClassName={styles.next_link}
    />
  );
};

export default Pagination;
