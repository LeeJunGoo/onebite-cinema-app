import { MovieData } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const MovieItem = ({ id, posterImgUrl, title, className }: MovieData & { className: string }) => {
  return (
    <li className={className}>
      <Link href={`/movie/${id}`} scroll={false}>
        <div className="relative w-full h-full">
          <Image
            fill
            src={posterImgUrl}
            alt={title}
            priority
            className="object-contain"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 20vw, (max-width: 1200px) 15vw, 15vw"
          />
        </div>
      </Link>
    </li>
  );
};

export default MovieItem;
