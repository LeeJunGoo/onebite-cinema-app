import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="min-h-[120px] flex justify-center items-center">
      <h1>
        <Link href={'/'} className="font-bold text-[30px] text-[#e50914]">
          ONEBITE CINEMA
        </Link>
      </h1>
    </header>
  );
};

export default Header;
