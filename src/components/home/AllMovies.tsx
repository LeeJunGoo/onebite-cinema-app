import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';

import MovieList from './MovieList';

const AllMovies = async () => {
  const allMovies = await fetchMovies<MovieData[]>({ type: 'all' });

  return (
    <>
      <MovieList
        movieList={allMovies}
        className="w-full h-[375px] sm:w-[calc(33.3%-20px)] sm:h-[170px] md:w-[calc(25%-22.5px)] md:h-[170px] lg:w-[calc(20%-24px)] "
      />
    </>
  );
};

export default AllMovies;
