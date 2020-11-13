import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function SpeakersCard({ title, description, date, video }) {
  let videoLink = video;

  // convert a "watch" link into an "embed" link
  if (video.includes('/watch?v=')) {
    // change watch link to an embed link
    let matches = video.match(/\?v=(.+)/);
    if (matches && matches.length === 2) {
      videoLink = `https://www.youtube.com/embed/${matches[1]}`;
    }
  }

  return (
    <div className="p-4 mb-10 bg-primary-100 rounded">
      <div
        className="relative w-full height-0 mb-4"
        style={{ paddingBottom: '56.25%' }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          title={title}
          src={videoLink}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h2 className="text-3xl font-medium mb-1">{title}</h2>
      <h3 className="text-primary-800 font-light">{date}</h3>
      <p className="mt-4 markdown">
        <ReactMarkdown source={description} />
      </p>
    </div>
  );
}
