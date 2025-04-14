import MovieDetail from '@/components/detail/MovieDetail';
import ReviewEditor from '@/components/detail/ReviewEditor';
import ReviewList from '@/components/detail/ReviewList';
import { MovieData } from '@/types';

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
      <ReviewEditor id={id} />
      <ReviewList id={id} />
    </div>
  );
};

export default MoviePage;
