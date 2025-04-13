import Footer from '@/components/layout/Footer';
import Searchbar from '@/components/Searchbar';
import SearchBarSkeleton from '@/skeleton/SearchBarSkeleton';
import React, { ReactNode, Suspense } from 'react';

const SearchBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense fallback={<SearchBarSkeleton />}>
        <Searchbar />
      </Suspense>
      {children}
      <Footer />
    </>
  );
};

export default SearchBarLayout;
