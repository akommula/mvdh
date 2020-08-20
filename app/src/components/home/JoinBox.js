import React from 'react';

export default function JoinBox() {
  return (
    <div>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScxYYiUE9GA7l1Ob1vtu1MsXgrWiqMlYvtpzo7ct8AeG53_aA/viewform?usp=sf_link"
        className="bg-primary-900 text-primary-100 px-8 py-4 text-lg rounded hover:shadow-lg cursor-pointer transition"
      >
        Sign up
        <div className="inline-block ml-1 pb-1">
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3 h-3"
          >
            <path
              fill="currentColor"
              d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
