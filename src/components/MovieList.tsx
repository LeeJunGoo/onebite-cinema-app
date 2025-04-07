import React from 'react';

import MovieItem from './MovieItem';
import { MovieData } from '@/types';

const MovieList = ({ movieList, className }: { movieList: MovieData[]; className: string }) => {
  return (
    <>
      <ul className="flex flex-wrap gap-[30px]">
        {movieList.map((item) => (
          <MovieItem key={item.id} {...item} className={className} />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
