import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ text, to }) => (
  <div className="mx-3 md:mx-4 border-b-2 border-transparent hover:text-primary-700 hover:border-primary-600">
    <Link to={to}>{text}</Link>
  </div>
);

export default function NavLinks() {
  return (
    <div className="flex">
      <NavLink text="News" to="/" />
      <NavLink text="Resources" to="/" />
      <NavLink text="Contact" to="/" />
      <NavLink text="About" to="/" />
    </div>
  );
}