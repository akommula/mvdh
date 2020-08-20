import React from 'react';

import ProjectCard from './ProjectCard';

export default function ExamplesCard() {
  return (
    <div className="mb-56 py-12 px-6 sm:px-8 md:px-16 lg:px-24 bg-primary-100">
      <div className="my-8 mx-auto max-w-lg text-center">
        <h2 className="text-4xl mb-4">Example Projects</h2>
      </div>
      <div className="my-4 flex flex-row mx-auto lg:justify-center overflow-x-scroll">
        <ProjectCard
          image="https://via.placeholder.com/200x200"
          title="The Title"
          description="roienta rsent aoersnt aoerinst irenstoaerns teanr ste narst reisnt aorsenta resnt aiersnt iarns iearns tarnes"
          link="/"
        />
        <ProjectCard
          image="https://via.placeholder.com/200x200"
          title="The Title except it is really, really long and overflows into the next line(s)"
          description="roienta rsent aoersnt aoerinst irenstoaerns teanr ste narst"
          link="/"
        />
        <ProjectCard
          image="https://via.placeholder.com/200x200"
          title="The Title"
          description="roienta rsent aoersnt aoerinst irenstoaerns teanr ste narst"
          link="/"
        />
      </div>
    </div>
  );
}
