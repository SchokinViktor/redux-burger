import React from "react";

import styles from "./Discover.module.scss";
import SearchInput from "../../components/SearchInput/SearchInput";
import Filters from "../../components/Filters/Filters";
import Sort from "../../components/Sort/Sort";
import ProductCard from "../../components/ProductCard/ProductCard";

const Discover = () => {
  const [productsData, setProductsData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      await fetch("https://63034f6d9eb72a839d7d7b58.mockapi.io/menu")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setProductsData(json);
          console.log(json);
        });
    };
    fetchData();
  }, []);

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

        <ul className={styles.burger_list}>
          {productsData.map((item) => {
            return (
              <li key={item.id} className={styles.burger_item}>
                <ProductCard {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Discover;
