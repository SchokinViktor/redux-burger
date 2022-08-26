import React from "react";

import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../redux/slices/filtersSlice";

import styles from "./SearchInput.module.scss";
import Icon from "../icons/Icon";

const SearchInput = ({ placeholder = "Search" }) => {
  const inputRef = React.useRef();
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
 
  const debounce = (fn, wait) => {
    let timeout;
    return (...arg) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...arg), wait);
    };
  };

  const updateSearchValue = React.useCallback(
    debounce((value) => dispatch(changeSearchValue(value)), 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setValue("");
    dispatch(changeSearchValue(""));
    inputRef.current.focus();
  };

  return (
    <div className={styles.wrapper}>
      <Icon name='search' className={styles.search_icon} />
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <button
          className={styles.clear_btn}
          onClick={() => {
            onClickClear();
          }}
        >
          <Icon name='close' className={styles.close_icon} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
