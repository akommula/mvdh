import React from 'react';

import { Link } from 'gatsby';

const ProjectCard = ({ image, title, link, description }) => (
  <Link
    className="m-4 p-2 bg-white rounded-lg shadow inline-block w-56 flex-none cursor-pointer hover:shadow-lg transition duration-200"
    to={link}
  >
    <img src={image} alt="" className="w-full" />
    <h3 className="mt-3 leading-snug"> {title}</h3>
    <p className="text-sm leading-tight mt-1">{description}</p>
  </Link>
);

export default function CurriculumCard() {
  return (
    <div className="mb-56 py-12 px-24 bg-primary-100">
      <div className="my-8 mx-auto max-w-lg text-center">
        <h2 className="text-3xl mb-4">Example Projects</h2>
      </div>
      <div className="my-4 flex flex-row mx-auto justify-center">
        <ProjectCard
          image="https://placehold.it/200x200"
          title="The Title"
          description="roienta rsent aoersnt aoerinst irenstoaerns teanr ste narst reisnt aorsenta resnt aiersnt iarns iearns tarnes"
          link="/"
        />
        <ProjectCard
          image="https://placehold.it/200x200"
          title="The Title except it is really, really long and overflows into the next line(s)"
          description="roienta rsent aoersnt aoerinst irenstoaerns teanr ste narst"
          link="/"
        />
        <ProjectCard
          image="https://placehold.it/200x200"
          title="The Title"
          description="roienta rsent aoersnt aoerinst irenstoaerns teanr ste narst"
          link="/"
        />
      </div>
    </div>
  );
}
