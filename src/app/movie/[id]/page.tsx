import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';

const MoviePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const movie = await fetchMovies<MovieData>({ type: 'detail', id });
  if (!movie) return <div>영화 정보를 불러오지 못했습니다.</div>;

  console.log('first');

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
