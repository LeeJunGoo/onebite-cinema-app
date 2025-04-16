import Searchbar from '@/components/common/Searchbar';
import Footer from '@/components/layout/Footer';
import SearchBarSkeleton from '@/skeleton/SearchBarSkeleton';
import { ReactNode, Suspense } from 'react';

const SearchBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense fallback={<SearchBarSkeleton />}>
        <Searchbar />
      </Suspense>
      {children}
    </>
  );
};

export default SearchBarLayout;
