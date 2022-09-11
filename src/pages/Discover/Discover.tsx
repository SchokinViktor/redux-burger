import React from 'react';

import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/slices/filtersSlice/selectors';
import { useAppDispatch } from '../../redux/store';
import { fetchProducts } from '../../redux/slices/productsSlice/asyncActions';

import styles from './_Discover.module.scss';
import SearchInput from '../../components/SearchInput/SearchInput';
import Filters, { FilterTypeEnum } from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import { sortTypes } from '../../components/Sort/Sort';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import CardSkeleton from '../../components/CardSkeleton/CardSkeleton';
import { selectProducts } from '../../redux/slices/productsSlice/selectors';
import { TProduct } from '../../redux/slices/productsSlice/types';
import { changePageNumber } from '../../redux/slices/filtersSlice/filtersSlice';

const Discover = () => {
  const dispatch = useAppDispatch();
  const [filteredLength, setFilteredLength] = React.useState<TProduct[]>([]);
  const { productsData, status, productsCount } = useSelector(selectProducts);
  const { filterType, sortId, searchValue, currentPageNumber } = useSelector(selectFilters);

  const filterBy = filterType !== FilterTypeEnum.ALL ? filterType : '',
    sortBy = sortTypes[sortId].name,
    order = sortTypes[sortId].property.toLowerCase();

  React.useEffect(() => {
    dispatch(fetchProducts({ filterBy, sortBy, order, searchValue, currentPageNumber }));
  }, [filterType, sortBy, currentPageNumber, searchValue, order]);

  const sekeletons = [...new Array(6)].map((_, index) => {
    return <CardSkeleton key={index} />;
  });

  React.useEffect(() => {
    const filteredData = productsData.filter((item) => {
      if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    });
    setFilteredLength(filteredData);
  }, [productsData]);

  React.useEffect(() => {
    dispatch(changePageNumber(1));
  }, [filterType, searchValue, sortId]);

  const products = () => {
    return filteredLength.map((item: TProduct) => {
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
          <div className={styles.error}>
            Loading Error 😵
            <br />
            Try refreshing the page
          </div>
        ) : status === 'loading' ? (
          <ul className={styles.burger_list}> {sekeletons} </ul>
        ) : filteredLength.length === 0 ? (
          <div className={styles.empty}>
            Oppps...
            <br />
            There is no such burger 😔💔🍔
            <br />
          </div>
        ) : (
          <>
            <ul className={styles.burger_list}> {products()} </ul>
            <div className={styles.pagination_holder}>
              <Pagination itemsCount={productsCount} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Discover;
