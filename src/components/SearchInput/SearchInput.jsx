import React from "react";

import styles from "./SearchInput.module.scss";
import Icon from "../icons/Icon";

const SearchInput = ({ placeholder = "Search" }) => {
  return (
    <div className={styles.wrapper}>
      <Icon name = 'search' className = {styles.search_icon}/>
      <input className={styles.input} placeholder={placeholder} />
      <Icon name = 'close' className = {styles.close_icon}/>
    </div>
  );
};

export default SearchInput;
