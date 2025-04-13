import AllMovies from '@/components/AllMovies';
import RecoMovies from '@/components/RecoMovies';
import MovieListSkeleton from '@/skeleton/MovieListSkeleton';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <main className="min-h-screen text-white text-[20px] font-bold pb-18 flex flex-col gap-10">
        <section>
          <h2 className="pb-3">지금 가장 추천하는 영화</h2>
          <Suspense fallback={<MovieListSkeleton type="random" count={3} />}>
            <RecoMovies />
          </Suspense>
        </section>
        <section>
          <h2 className="pb-3">등록된 모든 영화</h2>
          <Suspense fallback={<MovieListSkeleton type="all" count={12} />}>
            <AllMovies />
          </Suspense>
        </section>
      </main>
    </>
  );
}
