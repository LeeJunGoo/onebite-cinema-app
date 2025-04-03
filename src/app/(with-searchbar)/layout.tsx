import Searchbar from '@/components/Searchbar';
import React, { ReactNode } from 'react';

const SearchBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Searchbar />
      {children}
    </>
  );
};

export default SearchBarLayout;
