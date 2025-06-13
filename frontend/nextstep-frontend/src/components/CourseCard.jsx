const CourseCard = ({ title, university, field, type, requirements }) => {
  return (
    <div className="bg-gray-200 rounded-2xl p-5 shadow-md">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="font-medium text-gray-800">{university}</p>
      <p className="text-gray-700">{field}</p>
      <p className="text-gray-700 mb-2">{type}</p>
      <p className="font-semibold text-gray-800">Requirements:</p>
      <ul className="list-disc list-inside text-gray-700 text-sm">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCard;
