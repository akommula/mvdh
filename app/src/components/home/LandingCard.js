import React, { useState } from 'react';

import Slideshow from './Slideshow';

export default function LandingCard() {
  // whether or not the form is currently shown
  const [showForm, setShowForm] = useState(false);
  // set to true only once, and that loads the form
  const [loadForm, setLoadForm] = useState(false);

  function toggleForm() {
    if (!showForm && !loadForm) setLoadForm(true);
    setShowForm(!showForm);
  }

  return (
    <div className="mb-56 pt-12 pb-32 px-6 sm:px-16 md:px-24 bg-primary-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch max-w-screen-lg mx-auto">
        <div className="flex-auto flex flex-col my-8 lg:mr-10">
          <div className="flex-auto mb-32">
            <h1 className="text-5xl font-medium leading-tight mb-4">
              Monta Vista Digital Humanities
            </h1>
            <h2 className="text-2xl">Every other Thursday during lunch at Room A202</h2>
          </div>
          <div className="flex-none">
            <button
              className="bg-primary-900 text-primary-100 px-8 py-4 text-lg rounded hover:shadow-lg cursor-pointer transition duration-150"
              onClick={toggleForm}
            >
              Join our mailing list
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScxYYiUE9GA7l1Ob1vtu1MsXgrWiqMlYvtpzo7ct8AeG53_aA/viewform?usp=sf_link"
              className={
                'ml-4 p-2 inline-block transition duration-500 ' +
                (showForm ? 'opacity-100' : 'opacity-0 pointer-events-none')
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="inline w-6 h-6 sm:w-8 sm:h-8"
              >
                <path
                  fill="currentColor"
                  d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                />
              </svg>
            </a>
          </div>
          <p className="flex-none my-2 max-w-sm text-sm text-primary-800">
            Join our mailing list to receive updates on club info and upcoming
            meetings!
          </p>
          <div
            className="mt-12 transition-all duration-700 ease-in-out overflow-hidden"
            style={{
              maxHeight: showForm ? '500px' : '0px',
            }}
          >
            <div
              className="w-full border border shadow-inner rounded"
              style={{
                height: '500px',
                backgroundColor: '#F7E5FF',
                borderColor: '#421473',
              }}
            >
              {loadForm && (
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScxYYiUE9GA7l1Ob1vtu1MsXgrWiqMlYvtpzo7ct8AeG53_aA/viewform?embedded=true"
                  title="Join mailing list"
                  className="w-full h-full"
                >
                  Loading…
                </iframe>
              )}
            </div>
          </div>
        </div>
        <div className="flex-none">
          <Slideshow />
        </div>
      </div>
    </div>
  );
}
