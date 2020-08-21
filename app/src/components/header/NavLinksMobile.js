import React, { useState } from 'react';
import { Link } from 'gatsby';

const NavLink = ({ text, to }) => (
  <Link to={to}>
    <div className="mx-0 border-b-4 border-primary-500 text-light text-2xl bg-transparent pr-24 pl-6 py-3">
      {text}
    </div>
  </Link>
);

export default function NavLinksMobile() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div className="text-lg">
        <button onClick={() => setShowNav(true)} className="p-2">
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 h-8 inline"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          'absolute top-0 right-0 z-40 h-screen w-screen flex flex-row ' +
          (showNav ? '' : 'pointer-events-none')
        }
      >
        <button
          className={
            'flex-auto text-transparent transition duration-300 ' +
            (showNav ? 'opacity-100 cursor-default' : 'opacity-0')
          }
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
          onClick={() => setShowNav(false)}
        >
          Exit
        </button>
        <div
          className="flex-none flex flex-col overflow-y-hidden transition-all duration-300 rounded-bl-lg"
          style={{
            marginRight: showNav ? '0px' : '-240px',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(45,55,72,0.8)', // primary-800 (gray)
          }}
        >
          <div className="mx-0 text-right text-light text-2xl pr-6 py-2">
            <button onClick={() => setShowNav(false)} className="px-2 py-1">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                className="w-8 h-8 inline"
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                />
              </svg>
            </button>
          </div>
          <NavLink text="News" to="/news" />
          <NavLink text="Resources" to="/resources" />
          <NavLink text="Team" to="/team" />
          <NavLink text="Contact" to="/contact" />
        </div>
      </div>
    </>
  );
}
