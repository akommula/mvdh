import React from 'react';

export default function NewsCard({ title, description, date }) {
  return (
    <div className="p-4 mb-10 bg-primary-100 rounded">
      <h2 className="text-3xl font-medium mb-1">{title}</h2>
      <h3 className="text-primary-800 font-light">{date}</h3>
      <p className="mt-4">{description}</p>
    </div>
  );
}
