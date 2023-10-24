import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, rating, customerName, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="review card"
        height={120}
        width={120}
        className="object-contain rounded-full"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5">
        <img src={star} alt="star" height={27} width={27} />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-3xl font-palanquin text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
