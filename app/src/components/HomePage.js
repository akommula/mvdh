import React from 'react';

import LandingCard from './home/LandingCard';
import ExplainCard from './home/ExplainCard';
import CurriculumCard from './home/CurriculumCard';

export default function HomePage() {
  return (
    <>
      <LandingCard />
      <ExplainCard />
      <CurriculumCard />
    </>
  );
}
