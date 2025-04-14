import { createReviewAction } from '@/actions/review-action';

const ReviewEditor = async ({ id }: { id: string }) => {
  return (
    <section>
      <form action={createReviewAction}>
        <input name="movieId" value={id} readOnly hidden />
        <textarea
          name="content"
          className="w-full h-[80px] border-2 border-gray-800 rounded-[3px] p-2 text-[14px] focus:border-sky-400 resize-none"
          placeholder="리뷰를 남겨주세요"
          required
        ></textarea>
        <div className="flex justify-end gap-3">
          <input
            name="author"
            className="border-2 border-gray-800 rounded-[3px] p-2 text-[14px] focus:border-sky-400"
            placeholder="작성자 이름을 입력해주세요"
            required
          />
          <button
            className="border-2 border-gray-800 rounded-[5px] p-2 text-[13px] bg-white text-black font-bold hover:border-sky-400 active:bg-sky-400"
            type="submit"
          >
            작성하기
          </button>
        </div>
      </form>
    </section>
  );
};

export default ReviewEditor;
