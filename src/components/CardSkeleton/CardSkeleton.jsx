import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={420}
    height={440}
    viewBox='0 0 420 440'
    backgroundColor='#303030'
    foregroundColor='#403f3f'
    {...props}
  >
    <rect x='-3' y='4' rx='15' ry='15' width='397' height='382' />
  </ContentLoader>
);

export default CardSkeleton;
