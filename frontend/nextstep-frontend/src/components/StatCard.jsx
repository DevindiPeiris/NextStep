
const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold mb-2 text-gray-700">{title}</h3>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
};

export default StatCard;
