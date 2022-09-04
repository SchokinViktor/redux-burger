import Logo from '../../assets/img/logo.svg';
import styles from './Loader.module.scss';

export const LoaderIcon: React.FC = () => {
  return <img className={styles.loader_icon} src={Logo} alt='logo' />;
};

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LoaderIcon />
    </div>
  );
};

export default Loader;
