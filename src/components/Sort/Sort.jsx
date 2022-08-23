import React from "react";

import styles from "./Sort.module.scss";

const Sort = () => {
  const sortTypes = [
    {
      id: 1,
      name: "price ACS",
    },
    {
      id:2,
      name: "price DECS",

    },
    {
      id: 3,
      name: "alphabet ACS",
    },
    {
      id: 4,
      name: "alphabet DECS",
    },
  ];

  const [dropdownActive, setDropdownActive] = React.useState(false);
  const [sortType, setSortType] = React.useState('price ACS')

  return (
    <div className={styles.wrapper}>
      <span
        className={styles.text}
        onClick={() => setDropdownActive(!dropdownActive)}
      >
        Sort by: <span className={styles.sort}>{sortType}</span>
      </span>
      {
        dropdownActive && <div className={styles.dropdown}>
          <ul className={styles.list}>
            {sortTypes.map((item) => {
              return (
                <li key={item.id} className={styles.list_item} onClick = {() => {
                  setSortType(item.name);
                  setDropdownActive(false)
                }}>
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>

      }
    </div>
  );
};

export default Sort;
