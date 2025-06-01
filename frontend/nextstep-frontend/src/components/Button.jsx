const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-black text-white p-3 rounded font-semibold hover:bg-gray-800 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;