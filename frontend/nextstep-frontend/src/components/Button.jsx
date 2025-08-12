const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` bg-[#2560E0]  text-white p-3 rounded-lg font-semibold hover:bg-[#2560E099] transition [font-family:'Montserrat',sans-serif] px-35 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;