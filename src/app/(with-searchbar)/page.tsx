import MovieList from '@/components/MovieList';
import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';

export default async function Home() {
  const [allMovies, randomMovies] = await Promise.all([
    fetchMovies<MovieData[]>({ type: 'all' }),
    fetchMovies<MovieData[]>({ type: 'random' }),
  ]);

  if (!allMovies || !randomMovies) return <div>영화 정보를 불러오지 못했습니다.</div>;

  return (
    <>
      <main className="text-white text-[20px] font-bold pb-18 flex flex-col gap-10">
        <section>
          <h2 className="pb-3">지금 가장 추천하는 영화</h2>
          <MovieList movieList={randomMovies} className="w-[calc(33.3%-20px)]" />
        </section>
        <section>
          <h2 className="pb-3">등록된 모든 영화</h2>
          <MovieList movieList={allMovies} className="w-[calc(20%-24px)]" />
        </section>
      </main>
    </>
  );
}
