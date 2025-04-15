import SearchResult from '@/components/search/SearchResult';
import MovieListSkeleton from '@/skeleton/MovieListSkeleton';
import { Suspense } from 'react';

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  return (
    <main className="min-h-screen text-white text-[20px] font-bold pb-18">
      <Suspense key={q} fallback={<MovieListSkeleton type="random" count={6} />}>
        <SearchResult q={q} />
      </Suspense>
    </main>
  );
};

export default SearchPage;
