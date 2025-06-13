const CounselorCard = ({ image, name, description }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={image} alt={name} className="h-48 w-full object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
};

export default CounselorCard;
