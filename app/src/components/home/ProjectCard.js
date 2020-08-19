import React from 'react';

import { Link } from 'gatsby';

export default function ProjectCard({ image, title, link, description }) {
  return (
    <Link
      className="m-4 p-3 bg-white rounded-lg shadow inline-block w-56 flex-none cursor-pointer hover:shadow-lg transition duration-200"
      to={link}
    >
      <img src={image} alt="" className="w-full" />
      <h3 className="mt-3 leading-snug text-2xl font-light"> {title}</h3>
      <p className="leading-snug mt-1">{description}</p>
    </Link>
  );
}
