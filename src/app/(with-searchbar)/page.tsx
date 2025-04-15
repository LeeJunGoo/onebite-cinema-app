import AllMovies from '@/components/home/AllMovies';
import MovieBoundary from '@/components/common/MovieBoundary';
import RecoMovies from '@/components/home/RecoMovies';
import MovieListSkeleton from '@/skeleton/MovieListSkeleton';

import { Suspense } from 'react';

export default async function Home() {
  return (
    <>
      <main className="min-h-screen text-white text-[20px] font-bold pb-18 flex flex-col gap-10">
        <section>
          <h2 className="pb-3">지금 가장 추천하는 영화</h2>
          <MovieBoundary
            fallback={
              <div className="h-[200px] border-2 flex justify-center items-center">
                <h3 className="text-[22px]">⚠️ 오류가 발생했습니다.</h3>
              </div>
            }
          >
            <Suspense fallback={<MovieListSkeleton type="random" count={3} />}>
              <RecoMovies />
            </Suspense>
          </MovieBoundary>
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
