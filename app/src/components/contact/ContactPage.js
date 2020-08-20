import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl px-3 sm:px-12 py-16 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Contact</span>
      </h1>
      <div className="p-4 mb-10 bg-primary-100 shadow-sm rounded-lg">
        <h2>
          Feel free to reach out to our team at{' '}
          <a
            href="mailto:montavista.dh@gmail.com"
            className="text-secondary border-b border-transparent hover:border-secondary transition duration-100"
          >
            montavista.dh@gmail.com
          </a>
          !
        </h2>
      </div>
    </div>
  );
}
