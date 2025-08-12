const FileUpload = ({ placeholder }) => {
  return (
    <input
      type="file"
      placeholder={placeholder}
      className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 [font-family:'Montserrat',sans-serif]"
      accept=".pdf,.doc,.docx" 
    />
  );
};

export default FileUpload;