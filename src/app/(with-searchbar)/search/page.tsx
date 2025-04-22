import SearchResult from '@/components/search/SearchResult';
import MovieListSkeleton from '@/skeleton/MovieListSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}): Promise<Metadata> => {
  const { q } = await searchParams;

  return {
    title: `${q} : 한입 시네마 검색`,
    description: `${q} 검색 결과입니다.`,
    openGraph: {
      title: `${q} : 한입 시네마 검색`,
      description: `${q} 검색 결과입니다.`,
      images: ['/public/thumbnail.png'],
    },
  };
};

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
