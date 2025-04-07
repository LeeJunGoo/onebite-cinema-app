import { MovieData } from '@/types';
import Link from 'next/link';

const MovieItem = ({ id, posterImgUrl, title, className }: MovieData & { className: string }) => {
  return (
    <li className={`${className}`}>
      <Link href={`/movie/${id}`}>
        <img src={posterImgUrl} alt={title} />
      </Link>
    </li>
  );
};

export default MovieItem;
