import MovieList from '@/components/home/MovieList';
import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';

const SearchResult = async ({ q }: { q: string }) => {
  const searchMovies = await fetchMovies<MovieData[]>({ type: 'search', q });
  console.log('🚀 ~ SearchResult ~ searchMovies:', searchMovies);

  return (
    <>
      <h2 className="pb-3">검색 결과: {q}</h2>
      {searchMovies.length === 0 ? (
        <div className="text-white">해당 영화 정보가 없습니다.</div>
      ) : (
        <MovieList movieList={searchMovies} className="w-full h-[350px]  sm:w-[calc(33.3%-20px)] " />
      )}
    </>
  );
};

export default SearchResult;
