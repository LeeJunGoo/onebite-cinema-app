import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ReviewItemSkeleton = () => {
  return (
    <li className="text-[14px] flex flex-col gap-4 p-5">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="flex gap-2">
          <Skeleton width={93} height={27} />
          <Skeleton width={131} height={27} />
        </div>
        <Skeleton height={100} />
        <Skeleton width={90} height={22} />
      </SkeletonTheme>
    </li>
  );
};

export default ReviewItemSkeleton;
