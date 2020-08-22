import React from 'react';

export default function ProjectCard({ image, title, link, description }) {
  return (
    <a
      className="m-4 p-3 bg-white rounded-lg shadow inline-block w-56 flex-none cursor-pointer hover:shadow-lg transition duration-200"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {image}
      <h3 className="mt-3 leading-tight text-xl"> {title}</h3>
      <p className="leading-snug font-light mt-3">{description}</p>
    </a>
  );
}
