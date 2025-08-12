import React from 'react';
import Gray from './Gray';
import Button from './Button';

const Role = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="w-120 rounded-xl shadow-lg bg-white py-10 px-6 flex flex-col justify-between border border-[#d0daec] [font-family:'Montserrat',sans-serif]">
      <div cl>
        <h2 className="flex justify-center text-2xl font-bold text-black mb-2">{title}</h2>
        <div className="flex justify-center"><Gray>{description}</Gray></div>
      </div>
      <button
        className="bg-[#2560E0] text-white rounded  py-2 font-semibold mt-6 hover:bg-[#2560E099]"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Role;
