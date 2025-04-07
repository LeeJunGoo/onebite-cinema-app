import MovieList from '@/components/MovieList';
import React from 'react';
import mockData from '@/app/dummy.json';

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  return (
    <div className="text-white text-[20px] font-bold pb-18">
      <h2 className="pb-3">검색 결과: 존윅</h2>
      <MovieList movieList={mockData} className="w-[calc(33.3%-20px)]" />
    </div>
  );
};

export default SearchPage;
