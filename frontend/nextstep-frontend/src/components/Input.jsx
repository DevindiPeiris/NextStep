const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
  );
};

export default Input;