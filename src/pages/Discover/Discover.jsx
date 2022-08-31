import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changePageNumber } from "../../redux/slices/filtersSlice";
import { fetchProducts } from "../../redux/slices/productsSlice";

import styles from "./Discover.module.scss";
import SearchInput from "../../components/SearchInput/SearchInput";
import Filters from "../../components/Filters/Filters";
import Sort from "../../components/Sort/Sort";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

const filterTypes = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "BBQ",
  },
  {
    id: 2,
    name: "Vegetarian",
  },
  {
    id: 3,
    name: "Chiken",
  },
  {
    id: 4,
    name: "Fish",
  },
];

const sortTypes = [
  {
    id: 0,
    name: "price",
    property: "ASC",
  },
  {
    id: 1,
    name: "price",
    property: "DESC",
  },
  {
    id: 2,
    name: "weight",
    property: "ASC",
  },
  {
    id: 3,
    name: "weight",
    property: "DESC",
  },
];

const Discover = () => {
  const [actualProductsNumber, setActualProductsNumber] = React.useState(0);
  const dispatch = useDispatch();
  const { productsData, status, productsCount } = useSelector(
    (state) => state.productsReducer
  );
  const { filterType, sortId, searchValue, currentPageNumber } = useSelector(
    (state) => state.filtersReducer
  );

  const filterBy = filterType !== "all" ? filterType : "",
    sortBy = sortTypes[sortId].name,
    order = sortTypes[sortId].property.toLowerCase();

  React.useEffect(() => {
    dispatch(
      fetchProducts({ filterBy, sortBy, order, searchValue, currentPageNumber })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, sortBy, currentPageNumber, searchValue]);

  React.useEffect(() => {
    dispatch(changePageNumber(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, sortBy, searchValue]);

  const sekeletons = [...new Array(6)].map((_, index) => {
    return <CardSkeleton key={index} />;
  });

  const products = () => {
    return productsData
      .filter((item) => {
        if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
      })
      .map((item) => {
        return (
          <li key={item.id} className={styles.burger_item}>
            <ProductCard {...item} />
          </li>
        );
      });
  };
  console.log(actualProductsNumber);
  return (
    <section className={styles.discover}>
      <div className='container'>
        <div className={styles.input_holder}>
          <SearchInput placeholder='Search for burger' />
        </div>
        <div className={styles.row}>
          <div className={styles.filters_holder}>
            <Filters filterTypes={filterTypes} />
          </div>
          <div className={styles.sort_holder}>
            <Sort sortTypes={sortTypes} />
          </div>
        </div>
        <div className={styles.list_title}>{filterBy ? filterBy : "All"}</div>
        {status === "error" ? (
          <div className={styles.error}>Loading Error 😵</div>
        ) : (
          <ul className={styles.burger_list}>
            {status === "loading" ? (
              sekeletons
            ) : !productsCount ? (
              <div className={styles.empty}>There is no such burger 😥💔🍔</div>
            ) : (
              products()
            )}
          </ul>
        )}

        <div className={styles.pagination_holder}>
          <Pagination itemsCount={productsCount} />
        </div>
      </div>
    </section>
  );
};

export default Discover;
