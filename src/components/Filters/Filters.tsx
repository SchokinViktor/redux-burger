import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectFilters } from '../../redux/slices/filtersSlice';

import styles from './Filters.module.scss';

enum SelectFilterType {
  ALL = 'All',
  BBQ = 'Bbq',
  VEGETARIAN = 'Vegetarian',
  CHIKEN = 'Chiken',
  FISH = 'Fish',
}

type TfilterType = {
  id: number;
  name: SelectFilterType;
};

const filterTypes: TfilterType[] = [
  {
    id: 0,
    name: SelectFilterType.ALL,
  },
  {
    id: 1,
    name: SelectFilterType.BBQ,
  },
  {
    id: 2,
    name: SelectFilterType.VEGETARIAN,
  },
  {
    id: 3,
    name: SelectFilterType.CHIKEN,
  },
  {
    id: 4,
    name: SelectFilterType.FISH,
  },
];

const Filters: React.FC = () => {
  const { filterType } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onFilterChange = (typeName: SelectFilterType) => {
    dispatch(changeFilter(typeName));
  };

  return (
    <ul className={styles.list}>
      {filterTypes.map((item) => {
        return (
          <li
            key={item.id}
            className={
              filterType === item.name.toLowerCase()
                ? `${styles.type} ${styles.active}`
                : styles.type
            }
            onClick={() => onFilterChange(item.name.toLowerCase() as SelectFilterType)}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
