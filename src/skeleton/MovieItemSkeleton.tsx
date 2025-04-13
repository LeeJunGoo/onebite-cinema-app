import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonProps } from '@/types';
import React from 'react';

const MovieItemSkeleton = ({ skeletonInfo }: { skeletonInfo: SkeletonProps }) => {
  return (
    <li className={skeletonInfo.container}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton height={skeletonInfo.img.height} />
      </SkeletonTheme>
    </li>
  );
};

export default MovieItemSkeleton;
