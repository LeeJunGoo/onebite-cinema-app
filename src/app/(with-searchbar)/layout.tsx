import Searchbar from '@/components/Searchbar';
import React, { ReactNode, Suspense } from 'react';

const SearchBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </>
  );
};

export default SearchBarLayout;
