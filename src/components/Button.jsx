const Button = ({
  label,
  iconURL,
  textColor,
  backgroundColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center ${
        fullWidth && `w-full`
      } items-center gap-2 px-7 py-4  border-2 ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : `border-coral-red text-white bg-coral-red`
      } rounded-full text-xl`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="Arrow Right Icon" />}
    </button>
  );
};

export default Button;
