import Searchbar from '@/components/common/Searchbar';
import { ReactNode } from 'react';

const SearchBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Searchbar />
      {children}
    </>
  );
};

export default SearchBarLayout;
