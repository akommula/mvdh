import React from 'react';

import Logo from './header/Logo';
import NavLinks from './header/NavLinks';

export default function Header() {
  return (
    <div className="py-2 px-6 md:py-3 md:px-8 fixed w-full bg-primary-100 text-primary-900 flex items-center shadow-md z-50">
      <div className="flex-auto">
        <Logo />
      </div>
      <div className="flex-none">
        <NavLinks />
      </div>
    </div>
  );
}
