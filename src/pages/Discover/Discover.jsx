import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changePageNumber } from "../../redux/slices/filtersSlice";

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
  const [isLoading, setIsLoading] = React.useState(true);
  const [productsData, setProductsData] = React.useState([]);
  const [itemsCount, setItemsCount] = React.useState(0);

  const dispatch = useDispatch();
  const filterType = useSelector((state) => state.filtersReducer.typeName);
  const sortId = useSelector((state) => state.filtersReducer.sortId);
  const searchValue = useSelector((state) => state.filtersReducer.searchValue);
  const currentPage = useSelector(
    (state) => state.filtersReducer.currentPageNumber
  );

  const filterBy = filterType !== "all" ? filterType : "";
  const sortBy = sortTypes[sortId].name;
  const order = sortTypes[sortId].property.toLowerCase();

  const url = `https://63034f6d9eb72a839d7d7b58.mockapi.io/menu?page=${currentPage}&limit=${6}${
    filterBy ? `&type=${filterBy}` : ""
  }&name=${searchValue}&sortBy=${sortBy}&order=${order}`;

  React.useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setProductsData(data.items);
          setItemsCount(data.count);
          setIsLoading(false);
        });
    };
    fetchData();
  }, [filterType, sortBy, currentPage, searchValue]);

  React.useEffect(() => {
    dispatch(changePageNumber(1));
  }, [filterType, sortBy, searchValue]);

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
        {!isLoading ? (
          <ul className={styles.burger_list}>
            {productsData
              .filter((item) => {
                if (
                  item.name.toLowerCase().includes(searchValue.toLowerCase())
                ) {
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
              })}
          </ul>
        ) : (
          <ul className={styles.burger_list}>
            {productsData.map((item) => {
              return (
                <li key={item.id} className={styles.burger_item}>
                  <CardSkeleton />
                </li>
              );
            })}
          </ul>
        )}
        <div className={styles.pagination_holder}>
          <Pagination itemsCount={itemsCount} />
        </div>
      </div>
    </section>
  );
};

export default Discover;
