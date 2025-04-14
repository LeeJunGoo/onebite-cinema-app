import { FetchReviewProps } from '@/types';

export const getReviews = async <T>(id: string): Promise<T[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LOCAL_SERVER_URL}/review/movie/${id}`);
  if (!res.ok) throw new Error('리뷰를 저장하지 못했습니다.');
  return await res.json();
};

export const setReviews = async ({ movieId, content, author }: FetchReviewProps) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LOCAL_SERVER_URL}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ movieId, content, author }),
  });
  if (!res.ok) throw new Error('리뷰를 저장하지 못했습니다.');
};
