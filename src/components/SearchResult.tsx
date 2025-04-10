import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';
import { delay } from '@/util/delay';
import MovieList from './MovieList';

const SearchResult = async ({ q }: { q: string }) => {
  const searchMovies = await fetchMovies<MovieData[]>({ type: 'search', q });
  await delay(1000);

  if (!searchMovies) return <div>영화 정보를 불러오지 못했습니다.</div>;

  return (
    <>
      {searchMovies.length === 0 ? (
        <div className="text-white">해당 영화 정보가 없습니다.</div>
      ) : (
        <MovieList movieList={searchMovies} className="w-[calc(33.3%-20px)]" />
      )}
    </>
  );
};

export default SearchResult;
