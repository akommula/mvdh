import React from 'react';

import LandingCard from './LandingCard';
import ExplainCard from './ExplainCard';
import CurriculumCard from './ExamplesCard';
import ObjectivesCard from './ObjectivesCard';

export default function HomePage() {
  return (
    <>
      <LandingCard />
      <ExplainCard />
      <ObjectivesCard />
      <CurriculumCard />
    </>
  );
}
