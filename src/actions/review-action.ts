'use server';

import { setReviews } from '@/lib/fetchReviews';

export const createReviewAction = async (formData: FormData) => {
  const movieId = Number(formData.get('movieId'));
  const content = formData.get('content')?.toString();
  const author = formData.get('author')?.toString();

  if (!movieId || !content || !author) return;

  try {
    await setReviews({ movieId, content, author });
  } catch (error) {
    console.error(error);
  }
};
