export type FetchProps = {
  type: string;
  q?: string;
  id?: string;
};

const fetchMovies = async <T>({ type, q, id }: FetchProps): Promise<T | null> => {
  let url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`;
  let res;

  try {
    if (type === 'all') {
      res = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 7 } });
    }

    if (type === 'random') {
      res = await fetch(url + '/random', {
        next: { revalidate: 60 * 60 },
      });
    }

    if (type === 'search') {
      res = await fetch(url + `/search?q=${q}`, { cache: 'no-store' });
    }

    if (type === 'detail') {
      res = await fetch(url + `/${id}`, { cache: 'force-cache' });
    }

    if (!res!.ok) throw new Error('영화 정보를 불러오지 못 했습니다.');
    return await res!.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchMovies;
