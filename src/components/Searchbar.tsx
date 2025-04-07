'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Searchbar = () => {
  const [input, setInput] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  useEffect(() => {
    setInput(q || '');
  }, [q]);

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
      <div className="flex gap-[15px] pb-16">
        <input
          className="flex-2 border-2 border-gray-500 rounded-[5px] p-[8px] bg-white outline-none focus:border-red-800"
          onChange={handleSearchChange}
          value={input}
          type="text"
          placeholder="영화 이름을 검색해주세요"
          onKeyDown={handleSearchClick}
        />
        <button
          className="w-[80px] px-2 border-gray-500 bg-white  border-2 rounded-[5px] hover:bg-red-800 hover:border-red-800"
          onClick={handleSearchClick}
        >
          검색
        </button>
      </div>
    </>
  );
};

export default Searchbar;
