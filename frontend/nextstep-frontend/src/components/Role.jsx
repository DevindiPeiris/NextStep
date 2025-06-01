import React from 'react';
import Gray from './Gray';
import Button from './Button';

const Role = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="w-100 rounded-xl shadow-lg bg-white py-10 px-6 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-black mb-3">{title}</h2>
        <Gray>{description}</Gray>
      </div>
      <button
        className="bg-black text-white rounded w-full py-2 font-semibold mt-6"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Role;
