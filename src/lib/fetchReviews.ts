import { FetchReviewProps } from '@/types';

export const getReviews = async <T>(id: string): Promise<T[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LOCAL_SERVER_URL}/review/movie/${id}`, {
    next: { tags: [`review-${id}`] },
  });
  if (!res.ok) throw new Error('리뷰를 불러오지 못했습니다.');
  return await res.json();
};

export const createReview = async ({ movieId, content, author }: FetchReviewProps): Promise<boolean> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LOCAL_SERVER_URL}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ movieId, content, author }),
  });

  if (!res.ok) return false;

  return true;
};

export const deleteReview = async (reviewId: string): Promise<boolean> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_LOCAL_SERVER_URL}/review/${reviewId}`, { method: 'DELETE' });
  if (!res.ok) return false;

  return true;
};
