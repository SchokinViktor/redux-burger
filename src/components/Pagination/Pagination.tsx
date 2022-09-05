import React from 'react';
import ReactPaginate from 'react-paginate';

import { changePageNumber } from '../../redux/slices/filtersSlice/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/slices/filtersSlice/selectors';

import styles from './_Pagination.module.scss';

type TPagination = {
  itemsCount: number;
};

const Pagination: React.FC<TPagination> = ({ itemsCount }) => {
  const { filterType, searchValue, sortId, currentPageNumber } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onPageChange = (pageNumber: number) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
    dispatch(changePageNumber(pageNumber));
  };

  React.useEffect(() => {
    onPageChange(1);
  }, [filterType, searchValue, sortId]);

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={5}
      forcePage={currentPageNumber - 1}
      pageCount={Math.ceil(itemsCount / 6)}
      previousLabel='<'
      containerClassName={styles.wrapper}
      pageClassName={styles.page_item}
      pageLinkClassName={styles.page_link}
      activeLinkClassName={styles.page_active}
      previousClassName={styles.previous_item}
      nextClassName={styles.next_item}
      previousLinkClassName={styles.previous_link}
      nextLinkClassName={styles.next_link}
      disabledLinkClassName = {styles.disabled}
    />
  );
};

export default Pagination;
