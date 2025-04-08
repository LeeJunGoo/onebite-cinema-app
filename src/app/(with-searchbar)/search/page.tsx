import MovieList from '@/components/MovieList';
import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;
  const searchMovies = await fetchMovies<MovieData[]>({ type: 'search', q });

  if (!searchMovies) return <div>영화 정보를 불러오지 못했습니다.</div>;

  return (
    <div className="text-white text-[20px] font-bold pb-18">
      <h2 className="pb-3">검색 결과: {q}</h2>
      <MovieList movieList={searchMovies} className="w-[calc(33.3%-20px)]" />
    </div>
  );
};

export default SearchPage;
