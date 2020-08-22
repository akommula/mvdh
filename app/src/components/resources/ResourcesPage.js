import React from 'react';
import ResourceCard from './ResourceCard';
import { graphql, StaticQuery } from 'gatsby';

export default function ResourcesPage() {
  return (
    <div className="max-w-xl lg:max-w-6xl py-16 px-3 sm:px-12 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Resources</span>
      </h1>
      <div className="flex flex-row flex-wrap">
        <StaticQuery
          query={graphql`
            query {
              googleSheet {
                Resources {
                  title
                  description
                  embed
                  link
                }
              }
            }
          `}
          render={data =>
            data.googleSheet.Resources.map(r => (
              <ResourceCard key={r.title} {...r} />
            ))
          }
        />
      </div>
    </div>
  );
}
