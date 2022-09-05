import styles from './_NotReady.module.scss';

const NotReady: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>🏗️⏱️ This page is not ready yet</div>
    </div>
  );
};

export default NotReady;
