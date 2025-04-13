import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SearchBarSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="flex gap-[15px] pb-16">
        <div className="flex-2 ">
          <Skeleton height={44} />
        </div>
        <div className="w-[80px] ">
          <Skeleton height={44} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SearchBarSkeleton;
