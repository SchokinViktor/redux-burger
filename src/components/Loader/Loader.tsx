import Logo from '../../assets/img/logo.svg';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt='logo' />
    </div>
  );
};

export default Loader;
