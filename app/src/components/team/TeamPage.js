import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TeamCard from './TeamCard';

export default function TeamPage() {
  return (
    <div className="max-w-4xl px-3 sm:px-12 py-16 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Team</span>
      </h1>
      <div>
        <TeamCard
          name="Abhinav Kommula"
          job="President"
          description="Abhinav is a Senior at Monta Vista High School. He is fascinated by both STEM and Humanities disciplines and is interested in applying his knowledge to interdisciplinary studies. He's excited to work with others and make new connections with those who share his passion for Digital Humanities."
          image={
            <StaticImage
              src="../../assets/images/profile_abhinav.png"
              alt="Abhinav Kommula"
            />
          }
        />
        <TeamCard
          name="Brian Xu"
          job="Vice President"
          description="Brian is a senior at Monta Vista High School, and he is passionate about programming and journalism, as well as the intersection between STEM and Humanities fields. He was a semifinalist in the North American Computational Linguistics Olympiad, and he hopes to collaborate with others to help spread awareness and dig deep into Digital Humanities."
          image={
            <StaticImage
              src="../../assets/images/profile_brian.png"
              alt="Brian Xu"
            />
          }
        />
      </div>
    </div>
  );
}
