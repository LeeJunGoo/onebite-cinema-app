'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.get('q');

    if (!q) return;

    setInput(q);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearchClick = (
    e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if ('key' in e && e.key !== 'Enter') return;

    router.push(`/search?q=${input}`);
  };

  return (
    <>
      <input
        className="border rounded-[5px] pl-2"
        onChange={handleSearchChange}
        value={input}
        type="text"
        onKeyDown={handleSearchClick}
      />
      <button className="border ml-1 px-1 bg-gray-500 rounded-[5px]" onClick={handleSearchClick}>
        검색
      </button>
    </>
  );
};

export default Searchbar;
