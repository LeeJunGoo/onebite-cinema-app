import React from 'react';
import ReviewItemSkeleton from './ReviewItemSkeleton';

const ReviewListSkeleton = ({ count }: { count: number }) => {
  return (
    <ol className="divide-y-2 divide-gray-800 flex flex-col">
      {Array.from({ length: count }).map((_, index) => (
        <ReviewItemSkeleton key={index} />
      ))}
    </ol>
  );
};

export default ReviewListSkeleton;
