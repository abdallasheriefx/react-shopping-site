const Button = ({ customStyle, children }) => {
  return (
    <>
      <button
        className={`rounded-md bg-black px-4 py-2 text-white ${customStyle}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
