import { ReviewData } from '@/types';
import { IoTrashOutline } from 'react-icons/io5';
import ReviewDeleteButton from './ReviewDeleteButton';

const ReviewItem = ({ item }: { item: ReviewData }) => {
  const { id, content, author, createdAt, movieId } = item;
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
        <ReviewDeleteButton reviewId={id} movieId={movieId} />
      </div>
    </li>
  );
};

export default ReviewItem;
