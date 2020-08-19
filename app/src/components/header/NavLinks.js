import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ text, to }) => (
  <div className="mx-3 md:mx-4 border-b-2 border-transparent font-medium hover:border-primary-600">
    <Link to={to}>{text}</Link>
  </div>
);

export default function NavLinks() {
  return (
    <div className="flex">
      <NavLink text="News" to="/news" />
      <NavLink text="Resources" to="/resources" />
      <NavLink text="Team" to="/team" />
      <NavLink text="Contact" to="/contact" />
    </div>
  );
}
