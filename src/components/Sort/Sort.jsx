import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../redux/slices/filtersSlice";

import styles from "./Sort.module.scss";

const Sort = ({ sortTypes }) => {
  const [dropdownActive, setDropdownActive] = React.useState(false);
  const sortRef = React.useRef();

  const sortId = useSelector((state) => state.filtersReducer.sortId);
  const dispatch = useDispatch();

  const onSortChange = (sortName) => {
    dispatch(changeSort(sortName));
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setDropdownActive(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.wrapper}>
      <span
        className={styles.text}
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        Sort by:{" "}
        <span className={styles.sort}>
          {sortTypes[sortId].name} {sortTypes[sortId].property}
        </span>
      </span>
      {dropdownActive && (
        <div className={styles.dropdown}>
          <ul className={styles.list}>
            {sortTypes.map((item) => {
              return (
                <li
                  key={item.id}
                  className={styles.list_item}
                  onClick={() => {
                    onSortChange(item.id);
                    setDropdownActive(false);
                  }}
                >
                  {item.name} {item.property}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
