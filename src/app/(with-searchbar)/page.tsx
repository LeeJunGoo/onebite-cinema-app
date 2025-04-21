import AllMovies from '@/components/home/AllMovies';
import RecoMovies from '@/components/home/RecoMovies';

export default async function Home() {
  return (
    <>
      <main className="min-h-screen text-white text-[20px] font-bold pb-18 flex flex-col gap-10">
        <section>
          <h2 className="pb-3">지금 가장 추천하는 영화</h2>
          <RecoMovies />
        </section>
        <section>
          <h2 className="pb-3">등록된 모든 영화</h2>
          <AllMovies />
        </section>
      </main>
    </>
  );
}
