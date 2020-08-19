import React from 'react';

import { Link } from 'gatsby';

export default function NewsCard({ title, link, description, date }) {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-medium mb-1">
        <Link
          to={link}
          className="hover:text-secondary border-transparent border-b hover:border-secondary transition duration-200"
        >
          {title}
        </Link>
      </h2>
      <h3 className="text-primary-700">{date}</h3>
      <p className="mt-4">{description}</p>
    </div>
  );
}
