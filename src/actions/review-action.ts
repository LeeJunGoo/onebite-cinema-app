'use server';

import { createReview, deleteReview } from '@/lib/fetchReviews';
import { revalidateTag } from 'next/cache';

export const createReviewAction = async (_: any, formData: FormData) => {
  const movieId = Number(formData.get('movieId'));
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!movieId || !content || !author) return { status: false, message: '리뷰 내용과 작성자를 올바르게 입력해주세요' };

  const result = await createReview({ movieId, content, author });

  if (!result) return { status: false, message: '리뷰가 정삭적으로 저장되지 않았습니다.' };

  revalidateTag(`review-${movieId}`);

  return {
    status: true,
    message: '리뷰가 정상적으로 저장되었습니다.',
  };
};

export async function transitionRevalidate(movieId: number) {
  revalidateTag(`movie-review-${movieId}`);
}

export const deleteReviewAction = async (reviewId: number, movieId: number, _: any, formData: FormData) => {
  if (!reviewId || !movieId) return { status: false, message: '삭제하려는 리뷰이 존재하지 않습니다.' };

  const result = await deleteReview(reviewId.toString());

  if (!result) return { status: false, message: '리뷰가 정삭적으로 삭제되지 않았습니다.' };

  return {
    status: true,
    message: '리뷰가 정상적으로 삭제되었습니다.',
  };
};
