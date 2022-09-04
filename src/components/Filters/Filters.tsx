import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/slices/filtersSlice/filtersSlice';
import { selectFilters } from '../../redux/slices/filtersSlice/selectors';

import styles from './Filters.module.scss';

export enum FilterTypeEnum {
  ALL = 'All',
  BBQ = 'BBQ',
  VEGETARIAN = 'Vegetarian',
  CHIKEN = 'Chiken',
  FISH = 'Fish',
}

type TfilterType = {
  id: number;
  name: FilterTypeEnum;
};

const filterTypes: TfilterType[] = [
  {
    id: 0,
    name: FilterTypeEnum.ALL,
  },
  {
    id: 1,
    name: FilterTypeEnum.BBQ,
  },
  {
    id: 2,
    name: FilterTypeEnum.VEGETARIAN,
  },
  {
    id: 3,
    name: FilterTypeEnum.CHIKEN,
  },
  {
    id: 4,
    name: FilterTypeEnum.FISH,
  },
];

const Filters: React.FC = () => {
  const { filterType } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onFilterChange = React.useCallback((typeName: FilterTypeEnum) => {
    dispatch(changeFilter(typeName));
  }, []);

  return (
    <ul className={styles.list}>
      {filterTypes.map((item) => {
        return (
          <li
            key={item.id}
            className={
              filterType === item.name
                ? `${styles.type} ${styles.active}`
                : styles.type
            }
            onClick={() => onFilterChange(item.name as FilterTypeEnum)}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
