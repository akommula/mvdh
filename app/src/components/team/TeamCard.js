import React from 'react';

export default function TeamCard({ img, name, job, description }) {
  return (
    <div className="flex-none flex flex-col items-stretch w-56 mx-4 p-4 mb-10 bg-primary-100 rounded-lg shadow">
      <img
        src={img}
        alt={`Profile of ${name}`}
        className="w-48 h-48 rounded-full"
      />
      <h2 className="text-2xl font-medium mt-4 leading-tight">{name}</h2>
      <h3 className="text-primary-700 text-sm">{job}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
}
