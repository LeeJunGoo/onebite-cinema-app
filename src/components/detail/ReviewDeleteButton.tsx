'use client';

import { deleteReviewAction } from '@/actions/review-action';
import React, { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ReviewDeleteButton = ({ reviewId, movieId }: { reviewId: number; movieId: number }) => {
  const [state, formAction, isPending] = useActionState(deleteReviewAction.bind(null, reviewId, movieId), null);

  useEffect(() => {
    if (state && !state.status) toast.error(state.message);
    if (state && state.status) toast.success(state.message);
  }, [state]);

  return (
    <form action={formAction}>
      <button disabled={isPending}>{isPending ? '삭제중..' : '리뷰 삭제하기'}</button>
    </form>
  );
};

export default ReviewDeleteButton;
