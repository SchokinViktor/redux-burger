import React from 'react';

import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/slices/filtersSlice';
import { useAppDispatch } from '../../redux/store';
import { fetchProducts, selectProducts, TProduct } from '../../redux/slices/productsSlice';

import styles from './Discover.module.scss';
import SearchInput from '../../components/SearchInput/SearchInput';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import { sortTypes } from '../../components/Sort/Sort';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';

const Discover = () => {
  const dispatch = useAppDispatch();

  const { productsData, status, productsCount } = useSelector(selectProducts);
  const { filterType, sortId, searchValue, currentPageNumber } = useSelector(selectFilters);

  const filterBy = filterType !== 'all' ? filterType : '',
    sortBy = sortTypes[sortId].name,
    order = sortTypes[sortId].property.toLowerCase();

  React.useEffect(() => {
    dispatch(fetchProducts({ filterBy, sortBy, order, searchValue, currentPageNumber }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType, sortBy, currentPageNumber, searchValue, order]);

  const sekeletons = [...new Array(6)].map((_, index) => {
    return <CardSkeleton key={index} />;
  });

  const products = () => {
    return productsData
      .filter((item: TProduct) => {
        if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
      })
      .map((item: TProduct) => {
        return (
          <li key={item.id} className={styles.burger_item}>
            <ProductCard {...item} />
          </li>
        );
      });
  };

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
        <div className={styles.list_title}>{filterBy ? filterType : 'All'}</div>
        {status === 'error' ? (
          <div className={styles.error}>Loading Error 😵</div>
        ) : (
          <ul className={styles.burger_list}>
            {status === 'loading' ? (
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
