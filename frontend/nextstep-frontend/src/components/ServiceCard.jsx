const ServiceCard = ({ icon, img, title, description }) => {
  return (
    <div className="flex flex-col items-center border border-[#d0daec] bg-white p-5 md:p-12 rounded-lg shadow-2xl text-center max-w-70 max-h-70 hover:shadow-xl transition">
      {icon ? (
        <div className="text-4xl text-blue-600 mb-5">
          {icon}
        </div>
      ) : (
        img && <img src={img} alt={title} className="mb-5 w-12 h-12" />
      )}

      <h3 className="text-xl font-semibold mb-2 font-montserrat">{title}</h3>
      <p className="text-[14px] text-gray-600 font-montserrat">{description}</p>
    </div>
  );
};

export default ServiceCard;