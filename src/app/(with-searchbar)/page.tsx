import AllMovies from '@/components/home/AllMovies';
import RecoMovies from '@/components/home/RecoMovies';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '한입 시네마',
  description: '한입 시네마에 등록된 영화를 만나보세요.',
  openGraph: {
    title: '한입 시네마',
    description: '한입 시네마에 등록된 영화를 만나보세요',
    images: ['/public/thumbnail.png'],
  },
};

export default async function Home() {
  return (
    <>
      <main className="min-h-screen text-white text-[20px] font-bold pb-18 flex flex-col gap-10 text-center md:text-left">
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
