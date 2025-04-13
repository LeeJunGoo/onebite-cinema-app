import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';
import React from 'react';
import MovieList from './MovieList';
import { delay } from '@/util/delay';

const AllMovies = async () => {
  await delay(2700);
  const allMovies = await fetchMovies<MovieData[]>({ type: 'all' });

  if (!allMovies) return <div>영화 정보를 불러오지 못했습니다.</div>;
  return (
    <>
      <MovieList movieList={allMovies!} className="w-[calc(20%-24px)]" />
    </>
  );
};

export default AllMovies;
