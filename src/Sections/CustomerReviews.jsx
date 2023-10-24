import { reviews } from "../constants/index";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 text-center max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experience with us.
      </p>
      <div className="flex flex-1 justify-evenly mt-24 max-lg:flex-col gap-14 items-center">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
