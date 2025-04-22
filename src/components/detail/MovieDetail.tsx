import fetchMovies from '@/lib/fetchMovies';
import { MovieData } from '@/types';
import Image from 'next/image';
import React from 'react';

const MovieDetail = async ({ id }: { id: string }) => {
  const movie = await fetchMovies<MovieData>({ type: 'detail', id });

  return (
    <section className="flex flex-col gap-5">
      <div
        style={{ backgroundImage: `url(${movie.posterImgUrl})` }}
        className="w-full h-[500px] bg-cover bg-no-repeat bg-center backdrop-brightness-50"
      >
        <div className="bg-white/30 backdrop-brightness-50 w-full h-full absolute"></div>
        <div className="relative  w-[180px] h-[280px] sm:w-[300px] sm:h-[400px] top-1/2 left-1/2 -translate-1/2">
          <Image
            src={movie.posterImgUrl}
            alt={movie.title}
            fill
            sizes="(max-width:640px) 50vw, (max-width:760px) 50vw, (max-width:1200px) 30vw, 20vw"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-[18px] font-bold">{movie.title}</h3>
        <div>
          <time>{movie.releaseDate}&nbsp;&#47;&nbsp;</time>
          <span>{movie.genres}&nbsp;&#47;&nbsp;</span>
          <span>{movie.runtime}분</span>
        </div>
        <p>{movie.company}</p>
        <h4>{movie.subTitle}</h4>

        <p>{movie.description}</p>
      </div>
    </section>
  );
};

export default MovieDetail;
