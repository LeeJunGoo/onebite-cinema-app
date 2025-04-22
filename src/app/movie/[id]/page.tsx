import MovieBoundary from '@/components/common/MovieBoundary';
import MovieDetail from '@/components/detail/MovieDetail';
import ReviewEditor from '@/components/detail/ReviewEditor';
import ReviewList from '@/components/detail/ReviewList';
import fetchMovies from '@/lib/fetchMovies';
import ReviewListSkeleton from '@/skeleton/ReviewListSkeleton';
import { MovieData } from '@/types';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
  const { id } = await params;

  const movie = await fetchMovies<MovieData>({ type: 'detail', id });

  return {
    title: `${movie.title} - 한입 시네마`,
    description: `${movie.description}`,
    openGraph: {
      title: `${movie.title} - 한입 북스`,
      description: `${movie.description}`,
      images: [movie.posterImgUrl],
    },
  };
};

export const generateStaticParams = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`);
    if (!res.ok) return [];

    const result: MovieData[] = await res.json();
    const movies = result.map((item) => {
      return { id: item.id.toString() };
    });

    return movies;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const dynamicParams = false;

const MoviePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-10 text-white">
      <MovieDetail id={id} />
      {/* <ReviewEditor id={id} /> */}
      {/* <MovieBoundary
        fallback={
          <div className="h-[200px] border-2 flex justify-center items-center">
            <h3 className="text-[22px]">⚠️ 오류가 발생했습니다.</h3>
          </div>
        }
      >
        <Suspense fallback={<ReviewListSkeleton count={5} />}>
          <ReviewList id={id} />
        </Suspense>
      </MovieBoundary> */}
    </div>
  );
};

export default MoviePage;
