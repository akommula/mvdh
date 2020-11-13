import React from 'react';
import SpeakersCard from './SpeakersCard';
import { graphql, StaticQuery } from 'gatsby';

export default function HomePage() {
  return (
    <div className="max-w-4xl py-16 px-4 sm:px-12 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Speakers</span>
      </h1>
      <div className="my-4">
        <StaticQuery
          query={graphql`
            query {
              googleSheet {
                Speakers {
                  title
                  description
                  date
                  video
                }
              }
            }
          `}
          render={data =>
            data.googleSheet.Speakers.reverse().map(r => <SpeakersCard key={r.title} {...r} />)
          }
        />
      </div>
    </div>
  );
}

