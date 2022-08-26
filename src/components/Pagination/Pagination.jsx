import React from "react";
import ReactPaginate from "react-paginate";

import { changePageNumber } from "../../redux/slices/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Pagination.module.scss";

const Pagination = ({ itemsCount }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state) => state.filtersReducer.currentPageNumber
  );

  const onPageChange = (pageNumber) => {
    dispatch(changePageNumber(pageNumber));
  };

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={Math.round(itemsCount / 6)}
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
