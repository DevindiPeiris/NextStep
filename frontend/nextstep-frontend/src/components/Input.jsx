const Input = ({ name, value, onChange, placeholder, type = "text"  }) => {
  return (
    <input
      type={type}
      name={name}           
      value={value}         
      onChange={onChange}   
      placeholder={placeholder}
      className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 [font-family:'Montserrat',sans-serif]"
    />
  );
};

export default Input;