import React from 'react';

import Slideshow from './Slideshow';

export default function LandingCard() {
  return (
    <div className="mb-56 pt-12 pb-32 px-24 bg-primary-100">
      <div className="flex items-stretch max-w-screen-lg mx-auto">
        <div className="flex-auto flex flex-col my-8 mr-8 lg:mr-16">
          <div className="flex-auto">
            <h1 className="text-5xl font-medium leading-tight mb-4">
              Monta Vista Digital Humanities
            </h1>
            <h2 className="text-2xl">Every Tuesday at lunch in B204</h2>
          </div>
          <div className="flex-none">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScxYYiUE9GA7l1Ob1vtu1MsXgrWiqMlYvtpzo7ct8AeG53_aA/viewform?usp=sf_link"
              className="bg-primary-900 text-primary-100 px-8 py-4 text-lg rounded hover:shadow-lg cursor-pointer transition duration-150"
            >
              Join our mailing list
            </a>
          </div>
        </div>
        <div className="flex-none">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}
