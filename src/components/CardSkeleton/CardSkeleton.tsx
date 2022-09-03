import ContentLoader from 'react-content-loader';

import styles from './CardSkeleton.module.scss';

const CardSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={420}
    height={440}
    viewBox='0 0 420 440'
    backgroundColor='#303030'
    foregroundColor='#403f3f'
    className={styles.wrapper}>
    <rect x='-3' y='4' rx='15' ry='15' width='397' height='382' className={styles.rect} />
  </ContentLoader>
);

export default CardSkeleton;
