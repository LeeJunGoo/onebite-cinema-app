import { FetchProps } from '@/types';

const fetchMovies = async <T>({ type, q, id }: FetchProps): Promise<T> => {
  let url = `${process.env.NEXT_PUBLIC_API_LOCAL_SERVER_URL}/movie`;
  let res;
  let isFetch = false;

  if (type === 'all') {
    res = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 7 } });
    isFetch = true;
  }

  if (type === 'random') {
    res = await fetch(url + '/random', {
      next: { revalidate: 60 * 60 },
    });
    isFetch = true;
  }

  if (type === 'search') {
    if (!q) throw new Error('Query String 값이 존재하지 않습니다.');
    res = await fetch(url + `/search?q=${q}`, { cache: 'no-store' });
    isFetch = true;
  }

  if (type === 'detail') {
    if (!id) throw new Error('ID 값이 존재하지 않습니다.');
    res = await fetch(url + `/${id}`, { cache: 'force-cache' });
    isFetch = true;
  }

  if (!isFetch) throw new Error('URL Type이 잘못 되었습니다.');
  if (!res!.ok) throw new Error('영화 정보를 불러오지 못 했습니다.');
  return await res!.json();
};

export default fetchMovies;
