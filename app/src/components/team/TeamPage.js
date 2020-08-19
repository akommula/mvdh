import React from 'react';

import TeamCard from './TeamCard';

export default function TeamPage() {
  return (
    <div className="max-w-4xl py-16 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Team</span>
      </h1>
      <div className="flex flex-row flex-wrap">
        <TeamCard
          img="https://via.placeholder.com/192"
          name="Richard Liu"
          job="Webmaster"
          description="Richard is a senior at Monta Vista High School Richard is a senior at Monta Vista High School Richard is a senior at Monta Vista High School"
        />
        <TeamCard
          img="https://via.placeholder.com/192"
          name="Richard Liu"
          job="Webmaster"
          description="Richard is a senior at Monta Vista High School"
        />
        <TeamCard
          img="https://via.placeholder.com/192"
          name="Richard Liu"
          job="Webmaster"
          description="Richard is a senior at Monta Vista High School"
        />
        <TeamCard
          img="https://via.placeholder.com/192"
          name="Richard Liu"
          job="Webmaster"
          description="Richard is a senior at Monta Vista High School"
        />
        <TeamCard
          img="https://via.placeholder.com/192"
          name="Richard Liu"
          job="Webmaster"
          description="Richard is a senior at Monta Vista High School"
        />
        <TeamCard
          img="https://via.placeholder.com/192"
          name="Richard Liu"
          job="Webmaster"
          description="Richard is a senior at Monta Vista High School"
        />
      </div>
    </div>
  );
}
