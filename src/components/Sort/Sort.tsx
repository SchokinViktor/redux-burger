import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeSort, selectFilters } from '../../redux/slices/filtersSlice';

import styles from './Sort.module.scss';

enum SortProperyEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

enum SortNameEnum {
  PRICE = 'price',
  WEIGHT = 'weight',
}

type TSortTypeItem = {
  id: number;
  name: SortNameEnum;
  property: SortProperyEnum;
};

export const sortTypes: TSortTypeItem[] = [
  {
    id: 0,
    name: SortNameEnum.PRICE,
    property: SortProperyEnum.ASC,
  },
  {
    id: 1,
    name: SortNameEnum.PRICE,
    property: SortProperyEnum.DESC,
  },
  {
    id: 2,
    name: SortNameEnum.WEIGHT,
    property: SortProperyEnum.ASC,
  },
  {
    id: 3,
    name: SortNameEnum.WEIGHT,
    property: SortProperyEnum.DESC,
  },
];

const Sort: React.FC = () => {
  const [dropdownActive, setDropdownActive] = React.useState<boolean>(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const { sortId } = useSelector(selectFilters);
  const dispatch = useDispatch();

  const onSortChange = (sortName: number) => {
    dispatch(changeSort(sortName));
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setDropdownActive(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.wrapper}>
      <span className={styles.text} onClick={() => setDropdownActive(!dropdownActive)}>
        Sort by:{' '}
        <span className={styles.sort}>
          {sortTypes[sortId].name} {sortTypes[sortId].property}
        </span>
      </span>
      {dropdownActive && (
        <div className={styles.dropdown}>
          <ul className={styles.list}>
            {sortTypes.map((item) => {
              return (
                <li
                  key={item.id}
                  className={styles.list_item}
                  onClick={() => {
                    onSortChange(item.id);
                    setDropdownActive(false);
                  }}>
                  {item.name} {item.property}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
