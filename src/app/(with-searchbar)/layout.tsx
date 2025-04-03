import React, { ReactNode } from 'react';

const SearchBarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>Searchbar Layout</div>
      {children}
    </>
  );
};

export default SearchBarLayout;
