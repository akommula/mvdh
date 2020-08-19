import React from 'react';

export default function Slideshow() {
  return (
    <div className="">
      <div className="text-center font-light mb-1">
        Read more about our projects
      </div>
      <div className="relative border border-primary-900 rounded">
        <img src="https://placehold.it/400x400" alt="" />
        <div
          className="absolute bottom-0 left-0 w-full h-16 text-primary-100 p-2 z-10"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        >
          This project is about...
        </div>
        <button className="absolute top-0 left-0 w-12 h-full text-primary-100 flex items-center justify-center text-3xl font-bold bg-primary-900 opacity-0 hover:opacity-100 transition duration-300">
          &lt;
        </button>
        <button className="absolute top-0 right-0 w-12 h-full text-primary-100 flex items-center justify-center text-3xl font-bold bg-primary-900 opacity-0 hover:opacity-100 transition duration-300">
          &gt;
        </button>
      </div>
    </div>
  );
}
