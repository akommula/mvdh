import React from 'react';
import ResourceCard from './ResourceCard';

export default function ResourcesPage() {
  return (
    <div className="max-w-5xl py-16 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Resources</span>
      </h1>
      <div className="flex flex-row flex-wrap">
        <ResourceCard
          embed=""
          title="Hello world"
          description="Yesterday"
          link=""
        />
        <ResourceCard
          embed=""
          title="Hello world"
          description="Yesterday"
          link=""
        />
        <ResourceCard
          embed="<iframe src='https://docs.google.com/presentation/d/e/2PACX-1vRBqA2RZzAb0UGn6rQELY18YJaRdjr1OFjr3yTELCz2aukpwg4iF2WGmCwhRH8ZR6Lj3NoMW5nIZJ1w/embed?start=false&loop=false&delayms=3000' frameBorder='0' width='480' height='299' allowFullScreen='true' mozallowfullscreen='true' webkitallowfullscreen='true'></iframe>"
          title="Hello world"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim erat ex, at porttitor tellus semper id. Nunc facilisis et ligula quis pulvinar. Curabitur eget erat risus. Nullam porta consequat ante tincidunt molestie."
          link="https://www.google.com"
        />
        <ResourceCard embed="" title="Hello world" description="" link="" />
      </div>
    </div>
  );
}
