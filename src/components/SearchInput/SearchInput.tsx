import React from 'react';

import { useDispatch } from 'react-redux';
import { changeSearchValue } from '../../redux/slices/filtersSlice/filtersSlice';

import styles from './_SearchInput.module.scss';
import Icon from '../icons/Icon';

type SearchInputProps = { placeholder: string };

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search' }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const debounce = (fn: any, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...arg: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...arg), wait);
    };
  };

  const updateSearchValue = React.useCallback(
    debounce((value: string) => dispatch(changeSearchValue(value)), 500),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setValue('');
    dispatch(changeSearchValue(''));
    inputRef.current?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <Icon name='search' className={styles.search_icon} />
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
      />
      {value && (
        <button
          className={styles.clear_btn}
          onClick={() => {
            onClickClear();
          }}>
          <Icon name='close' className={styles.close_icon} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
