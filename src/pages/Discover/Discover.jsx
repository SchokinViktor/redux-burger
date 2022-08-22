import React from "react";

import styles from "./Discover.module.scss";
import SearchInput from "../../components/SearchInput/SearchInput";
import Filters from "../../components/Filters/Filters";
import Sort from "../../components/Sort/Sort";

const Discover = () => {
  return (
    <section className={styles.discover}>
      <div className='container'>
        <div className={styles.input_holder}>
          <SearchInput placeholder='Search for burger' />
        </div>
        <div className={styles.row}>
          <div className={styles.filters_holder}>
            <Filters />
          </div>
          <div className={styles.sort_holder}>
            <Sort />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
