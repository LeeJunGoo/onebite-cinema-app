'use client';

import { transitionRevalidate, deleteReviewAction } from '@/actions/review-action';
import React, { startTransition, useActionState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const ReviewDeleteButton = ({ reviewId, movieId }: { reviewId: number; movieId: number }) => {
  const [state, formAction, isPending] = useActionState(deleteReviewAction.bind(null, reviewId, movieId), null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state) return;

    if (!state.status) toast.error(state.message, { id: reviewId.toString() });

    if (state.status) {
      toast.success(state.message, { id: reviewId.toString() });

      startTransition(() => {
        transitionRevalidate(movieId);
      });
    }
  }, [state]);

  useEffect(() => {
    if (isPending) {
      toast.loading('삭제 중입니다.', { id: reviewId.toString() });
    }
  }, [isPending]);

  const handleDeleteClick = () => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form action={formAction} ref={formRef}>
      <div
        onClick={handleDeleteClick}
        className={`${isPending ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'} `}
        aria-label="삭제하기 버튼"
      >
        {isPending ? '삭제중..' : '리뷰 삭제하기'}
      </div>
    </form>
  );
};

export default ReviewDeleteButton;
