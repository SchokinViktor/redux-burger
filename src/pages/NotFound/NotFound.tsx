import styles from './_NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.status}>404</div>
      <div className={styles.text}>😲 Page not found 😲</div>
    </div>
  );
};

export default NotFound;
