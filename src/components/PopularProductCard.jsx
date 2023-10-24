import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[250px] h-[250px] object-contain"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="text-slate-gray font-xl font-montserrat">(4.5)</p>
      </div>
      <h3 className="mt-2 font-semibold text-2xl font-palanquin leading-normal">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-coral-red leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
