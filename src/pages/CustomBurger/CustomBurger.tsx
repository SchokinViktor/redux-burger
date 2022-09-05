import { LoaderIcon } from '../../components/Loader/Loader';
import NotReady from '../../components/NotReady/NotReady';
import styles from './_CustomBurger.module.scss';

const CustomBurger: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader_wrapper}>
        <LoaderIcon />
      </div>
      <NotReady />
    </div>
  );
};

export default CustomBurger;
