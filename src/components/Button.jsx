const Button = ({ label, iconURL }) => {
  return (
    <div>
      <button
        className="flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none bg-coral-red rounded-full text-white font-montserrat border
      "
      >
        {label}

        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      </button>
    </div>
  );
};

export default Button;
