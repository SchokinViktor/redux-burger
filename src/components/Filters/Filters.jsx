import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/slices/filtersSlice";

import styles from "./Filters.module.scss";

const Filters = ({filterTypes}) => {
  const filterType = useSelector((state) => state.filtersReducer.filterType);
  const dispatch = useDispatch();

  const onFilterChange = (typeName) => {
    dispatch(changeFilter(typeName));
  };

  return (
    <ul className={styles.list}>
      {filterTypes.map((item) => {
        return (
          <li
            key={item.id}
            className={
              filterType === item.name.toLowerCase()
                ? `${styles.type} ${styles.active}`
                : styles.type
            }
            onClick={() => onFilterChange(item.name.toLowerCase())}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
