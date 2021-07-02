import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function ObjectivesCard() {
  return (
    <div className="mb-56 py-12 px-6 sm:px-12 md:px-24 bg-primary-100">
      <div className="my-8 mx-auto max-w-2xl text-center">
        <h2 className="text-4xl mb-4">Club Objectives</h2>
        <p className="text-lg">
          In this club, we will explore the means and methods of constructing
          formal historical models in the humanities. We will undertake numerous
          case studies of key projects to understand the process of building
          models, commonly used tools and the impact of each project.
          Additionally, we provide project topics, assistance and exposure to
          popular tools for research.
        </p>
      </div>
      <div className="mx-auto max-w-screen-lg">
        <StaticImage
          src="../../assets/images/data_process_flowchart.png"
          alt="Flowchart of data analysis process"
          width={1024}
        />
      </div>
    </div>
  );
}
