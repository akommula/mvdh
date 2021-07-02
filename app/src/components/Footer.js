import React from 'react';
import { Link } from 'gatsby';
import Logo from './header/Logo';

const FooterLink = ({ to, text, bold }) => (
  <div
    className={
      'flex-auto flex items-center justify-center text-sm my-3 ' +
      (bold ? 'font-bold' : '')
    }
  >
    <Link to={to} className="w-24 text-center">
      {text}
    </Link>
  </div>
);

export default function Footer() {
  return (
    <div className="pt-12 pb-12 px-12 sm:px-24 bg-primary-100">
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch mx-auto max-w-3xl mb-4">
        <FooterLink to="/news" text="News" bold />
        <FooterLink to="/resources" text="Resources" bold />
        <div className="flex-auto flex items-center justify-center my-3">
          <Logo />
        </div>
        <FooterLink to="/team" text="Team" bold />
        <FooterLink to="/contact" text="Contact" bold />
      </div>
      <hr className="border border-primary-300" />
      <div className="text-center mt-8">
        &copy; 2020 - 2021 Monta Vista Digital Humanities Club. All rights reserved.
      </div>
    </div>
  );
}
