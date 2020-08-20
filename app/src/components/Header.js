import React from 'react';

import Logo from './header/Logo';
import NavLinks from './header/NavLinks';
import NavLinksMobile from './header/NavLinksMobile';

export default function Header() {
  return (
    <div className="py-2 px-6 md:py-3 md:px-8 fixed leading-relaxed w-full bg-primary-900 text-white flex items-center shadow-md z-50">
      <div className="flex-auto">
        <Logo />
      </div>
      <div className="flex-none">
        <div className="hidden sm:block">
          <NavLinks />
        </div>
        <div className="block sm:hidden">
          <NavLinksMobile />
        </div>
      </div>
    </div>
  );
}
