import { getReviews } from '@/lib/fetchReviews';
import { ReviewData } from '@/types';
import ReviewItem from './ReviewItem';

const ReviewList = async ({ id }: { id: string }) => {
  const reviews = await getReviews<ReviewData>(id);

  return (
    <section>
      <ol className="divide-y-2 divide-gray-800 flex flex-col">
        {reviews.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </ol>
    </section>
  );
};

export default ReviewList;
