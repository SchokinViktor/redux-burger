import React from "react";

import styles from "./Filters.module.scss";

const Filters = () => {
  const types = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "BBQ",
    },
    {
      id: 3,
      name: "Vegetarian",
    },
    {
      id: 4,
      name: "Chiken",
    },
    {
      id: 5,
      name: "Fish",
    },
  ];

  const [activeType, setActiveType] = React.useState("all");

  return (
    <ul className={styles.list}>
      {types.map((item) => {
        return (
          <li
            key={item.id}
            className={
              activeType === item.name.toLowerCase()
                ? `${styles.type} ${styles.active}`
                : styles.type
            }
            onClick={() => setActiveType(item.name.toLowerCase())}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
