import SearchResult from '@/components/SearchResult';
import { Suspense } from 'react';

const SearchPage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q } = await searchParams;

  return (
    <div className="text-white text-[20px] font-bold pb-18">
      <h2 className="pb-3">검색 결과: {q}</h2>
      <Suspense key={q} fallback={<div>Loading...</div>}>
        <SearchResult q={q} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
