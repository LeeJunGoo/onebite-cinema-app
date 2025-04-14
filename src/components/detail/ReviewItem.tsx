import { ReviewData } from '@/types';
import { IoTrashOutline } from 'react-icons/io5';

const ReviewItem = ({ item }: { item: ReviewData }) => {
  const { content, author, createdAt } = item;
  return (
    <li className="text-[14px] flex flex-col gap-4 p-5">
      <div className="flex gap-2">
        <h4 className="text-[18px] font-bold">{author}</h4>
        <time className="relative top-1">{`${new Date(createdAt).toLocaleDateString()} 일 작성됨`}</time>
      </div>
      <div>
        <p>{content}</p>
      </div>
      <div className="flex items-center gap-1">
        <IoTrashOutline />
        <button>리뷰 삭제하기</button>
      </div>
    </li>
  );
};

export default ReviewItem;
