import fetchMovies from '@/lib/fetchMovies';
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

  const movie = await fetchMovies<MovieData>({ type: 'detail', id });
  if (!movie) return <div>영화 정보를 불러오지 못했습니다.</div>;

  return (
    <div className="text-white flex flex-col gap-5">
      <section
        style={{ backgroundImage: `url(${movie.posterImgUrl})` }}
        className="w-full h-[500px] bg-cover bg-no-repeat bg-center backdrop-brightness-50"
      >
        <div className="bg-white/30 backdrop-brightness-50 w-full h-full absolute"></div>
        <img
          src={movie.posterImgUrl}
          alt={movie.title}
          className="w-f h-[400px] absolute top-1/2 left-1/2 -translate-1/2"
        />
      </section>
      <section className="flex flex-col gap-2 items-center">
        <h3 className="text-[18px] font-bold">{movie.title}</h3>
        <div>
          <time>{movie.releaseDate}&nbsp;&#47;&nbsp;</time>
          <span>{movie.genres}&nbsp;&#47;&nbsp;</span>
          <span>{movie.runtime}분</span>
        </div>
        <p>{movie.company}</p>
        <h4>{movie.subTitle}</h4>

        <p>{movie.description}</p>
      </section>
    </div>
  );
};

export default MoviePage;
