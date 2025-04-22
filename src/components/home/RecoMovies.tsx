import { delay } from '@/util/delay';
import MovieList from './MovieList';
import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';

const RecoMovies = async () => {
  await delay(2000);
  const randomMovies = await fetchMovies<MovieData[]>({ type: 'random' });

  return (
    <>
      <MovieList
        movieList={randomMovies!}
        className="w-full h-[315px] sm:w-[calc(33.3%-20px)] sm:h-[170px] md:h-[315px] "
      />
    </>
  );
};

export default RecoMovies;
