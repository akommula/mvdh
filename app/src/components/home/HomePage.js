import React from 'react';

import LandingCard from './LandingCard';
import ExplainCard from './ExplainCard';
import ExamplesCard from './ExamplesCard';
import ObjectivesCard from './ObjectivesCard';
import WhoCard from './WhoCard';

export default function HomePage() {
  return (
    <>
      <LandingCard />
      <ExplainCard />
      <WhoCard />
      <ObjectivesCard />
      <ExamplesCard />
    </>
  );
}
