import MovieList from '@/components/MovieList';
import mockData from '@/app/dummy.json';

export default function Home() {
  const recommendMovies = mockData.filter((item) => {
    if (item.id <= 3) {
      return item;
    }
  });

  return (
    <>
      <section className="text-white text-[20px] font-bold pb-18">
        <h2 className="pb-3">지금 가장 추천하는 영화</h2>
        <MovieList movieList={recommendMovies} className="w-[calc(33.3%-20px)]" />
      </section>
      <section className="text-white text-[20px] font-bold pb-18">
        <h2 className="pb-3">등록된 모든 영화</h2>
        <MovieList movieList={mockData} className="w-[calc(20%-24px)]" />
      </section>
    </>
  );
}
