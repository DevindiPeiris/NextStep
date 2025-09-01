const CounselorCard = ({ name, image, description, onViewDetails }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={name} className="  h-30 object-cover mb-4" />
      <h3 className="text-xl font-semibold">{name}</h3>
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
