

const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center border border-[#d0daec] bg-white p-12 rounded-lg shadow-2xl text-center max-w-70">
      <img src={img} className="mb-5"/>
      <h3 className="text-xl font-semibold mb-2 [font-family:'Montserrat',sans-serif]">{title}</h3>
      <p className="text-[14px] text-gray-600 [font-family:'Montserrat',sans-serif]">{description}</p>
    </div>
  );
};

export default ServiceCard;