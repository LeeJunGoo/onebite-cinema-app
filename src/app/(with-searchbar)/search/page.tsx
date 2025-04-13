import SearchResult from '@/components/SearchResult';
import MovieListSkeleton from '@/skeleton/MovieListSkeleton';
import { Suspense } from 'react';

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  return (
    <main className="min-h-screen text-white text-[20px] font-bold pb-18">
      <h2 className="pb-3">검색 결과: {q}</h2>
      <Suspense key={q} fallback={<MovieListSkeleton type="random" count={6} />}>
        <SearchResult q={q} />
      </Suspense>
    </main>
  );
};

export default SearchPage;
