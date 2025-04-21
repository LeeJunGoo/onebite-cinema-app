'use client';

import { createReviewAction } from '@/actions/review-action';
import { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';

const ReviewEditor = ({ id }: { id: string }) => {
  const [state, formAction, isPending] = useActionState(createReviewAction, null);

  useEffect(() => {
    if (state && !state.status) toast.error(state.message, { id });
    if (state && state.status) {
      toast.success(state.message, {
        id,
      });
    }
  }, [state]);

  useEffect(() => {
    if (isPending) {
      toast.loading('처리 중입니다.', {
        id,
      });
    }
  }, [isPending]);

  return (
    <section>
      <form action={formAction}>
        <input name="movieId" value={id} readOnly hidden />
        <textarea
          name="content"
          className="w-full h-[80px] border-2 border-gray-800 rounded-[3px] p-2 text-[14px] focus:border-sky-400 resize-none"
          placeholder="리뷰를 남겨주세요"
          required
          disabled={isPending}
        ></textarea>
        <div className="flex justify-end gap-3">
          <input
            name="author"
            className="border-2 border-gray-800 rounded-[3px] p-2 text-[14px] focus:border-sky-400"
            placeholder="작성자 이름을 입력해주세요"
            required
            disabled={isPending}
          />
          <button
            className={`border-2 border-gray-800 rounded-[5px] p-2 text-[13px] bg-white text-black font-bold ${
              !isPending ? 'hover:border-sky-400 active:bg-sky-400' : ''
            } `}
            type="submit"
            disabled={isPending}
          >
            {isPending ? '작성중..' : '작성하기'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
