import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ text, to }) => (
  <Link to={to} className="mx-3 md:mx-4">
    <div className="border-b-2 border-transparent font-medium hover:border-primary-600 px-2 py-1">
      {text}
    </div>
  </Link>
);

export default function NavLinks() {
  return (
    <div className="flex flex-row">
      <NavLink text="News" to="/news" />
      <NavLink text="Resources" to="/resources" />
      <NavLink text="Team" to="/team" />
      <NavLink text="Contact" to="/contact" />
    </div>
  );
}
