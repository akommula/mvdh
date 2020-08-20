import React from 'react';

export default function TeamCard({ img, name, job, description }) {
  return (
    <div className="flex-none flex flex-row items-stretch h-48 mb-8 bg-primary-100 rounded-lg shadow">
      <div className="flex-none h-full rounded-full p-3">
        <img
          src={img}
          alt={`Profile of ${name}`}
          className="rounded-full h-full border-8 border-primary-200"
        />
      </div>
      <div className="flex-auto mx-2 py-2">
        <h2 className="text-2xl font-medium mt-4 leading-tight">{name}</h2>
        <h3 className="text-primary-700 text-sm">{job}</h3>
        <p className="mt-2 leading-snug">{description}</p>
      </div>
    </div>
  );
}
