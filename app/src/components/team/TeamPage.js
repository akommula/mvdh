import React from 'react';

import TeamCard from './TeamCard';
import { graphql, StaticQuery } from 'gatsby';

export default function TeamPage() {
  return (
    <div className="max-w-4xl px-3 sm:px-12 py-16 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Team</span>
      </h1>
      <div className="">
        <StaticQuery
          query={graphql`
            query {
              googleSheet {
                Team {
                  name
                  job
                  description
                  image
                }
              }
            }
          `}
          render={data =>
            data.googleSheet.Team.map(t => <TeamCard key={t.name} {...t} />)
          }
        />
      </div>
    </div>
  );
}
