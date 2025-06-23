const CounselorCard = ({ name, image, description, onViewDetails }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={name} className="rounded-lg w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>
      <button
        onClick={onViewDetails}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </button>
    </div>
  );
};

export default CounselorCard;
