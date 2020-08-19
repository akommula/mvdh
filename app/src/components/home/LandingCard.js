import React from 'react';

import JoinBox from './JoinBox';
import Slideshow from './Slideshow';

export default function LandingCard() {
  return (
    <div className="mb-56 pt-12 pb-32 px-24 bg-primary-100">
      <div className="flex items-stretch max-w-screen-xl mx-auto">
        <div className="flex-auto flex flex-col my-8 mr-6 xl:mr-32">
          <div className="flex-auto">
            <h1 className="text-6xl font-medium leading-tight mb-4">
              Monta Vista Digital Humanities
            </h1>
            <h2 className="text-2xl">Every Tuesday at lunch in B204</h2>
          </div>
          <div className="flex-none">
            <JoinBox />
          </div>
        </div>
        <div className="flex-none">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}
