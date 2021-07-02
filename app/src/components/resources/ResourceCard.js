import React, { useState } from 'react';

export default function ResourceCard({ title, description, embed, link }) {
  const [loadEmbed, setLoadEmbed] = useState(false);

  // use a default width of 1200px if SSR (server side rendering)
  const [windowWidth, setWindowWidth] = React.useState({
    width: typeof window === 'undefined' ? 1200 : window.innerWidth,
  });

  function changeWindowSize() {
    setWindowWidth(window.innerWidth);
  }

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', changeWindowSize);
    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);

  /* Scale the media (slideshow/video) to the correct size */
  // width of one side of padding from the edge of screen to the media
  const paddingWidth = 12;
  // original width of the media
  const mediaWidth = 480;
  // if there is enough space to show it all, do not scale down
  let needTransform = windowWidth - paddingWidth * 2 < mediaWidth;
  // transform ratio determined by width of screen
  let transform = needTransform ? (windowWidth - paddingWidth * 2) / 480 : 1;
  // offset needed to correct transform movement
  let offset = needTransform
    ? mediaWidth / 2 - (windowWidth - paddingWidth * 2) / 2
    : 0;

  return (
    <div
      className="flex-none mb-12 mr-12 bg-primary-100 rounded shadow overflow-hidden"
      style={{
        maxWidth: '480px',
        transform: `scale(${transform})`,
        marginLeft: `-${offset}.px`,
      }}
    >
      <div
        className="flex-none"
        style={{
          width: '480px',
          height: '299px',
        }}
      >
        <div className="relative h-full">
          <div className="z-10 absolute h-full w-full">
            {loadEmbed ? (
              embed ? (
                embed
              ) : (
                <img
                  src="https://via.placeholder.com/480x299?Missing+embed"
                  alt="Missing embed"
                />
              )
            ) : (
              <div
                className="h-full flex justify-center items-center"
                style={{ backgroundColor: 'rgb(33, 39, 41)' }}
              >
                <button onClick={() => setLoadEmbed(true)}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-16 h-16 text-white mx-auto block"
                  >
                    <path
                      fill="currentColor"
                      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
                    />
                  </svg>
                  <div className="text-white font-light mt-2">
                    Click to load slideshow/video
                  </div>
                </button>
              </div>
            )}
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              zIndex: '-10',
            }}
          >
            <div className="flex justify-center items-center w-full h-full">
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-16 h-16 animate-spin"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z"
                    className="opacity-50"
                  />
                  <path
                    fill="currentColor"
                    d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-auto p-2">
        <h2 className="pt-2 pb-2 text-2xl font-medium leading-tight">
          <a
            className="border-b border-transparent hover:border-primary-900 transition duration-100"
            href={link}
          >
            {title}
          </a>
        </h2>
        <p className="leading-snug">{description}</p>
      </div>
    </div>
  );
}
