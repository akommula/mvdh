import React from 'react';
import ResourceCard from './ResourceCard';

export default function ResourcesPage() {
  return (
    <div className="max-w-xl lg:max-w-6xl py-16 px-3 sm:px-12 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Resources</span>
      </h1>
      <div className="flex flex-row flex-wrap">
        <ResourceCard
          title="Imperiia: Mapping the Russian Empire"
          description="The original idea was to see what GIS (geographic information system) methods and tools would reveal about the history of the Russian Empire, particularly as it evolved over the course of the eighteenth and nineteenth centuries
"
          embed={
            <iframe
              title="Imperiia presentation"
              src="https://docs.google.com/presentation/d/e/2PACX-1vTSxZQXJjNUWkZe8Mi_Y_0rylXKRTUfuDVQWzucZbdnUIluEn2T0xMe8nzJYVxheSrE38ViZQLYb3ig/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="480"
              height="299"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          }
          link="https://docs.google.com/presentation/d/15qsCCDHQN3xdcHUWv4Q_Z_QxN7Anoc1qGit_i1rj6Nk/edit?usp=sharing"
        />
        <ResourceCard
          title="Exploring Medieval Mary Magdalene"
          description="An online collection of digital editions containing a late medieval legend of Mary Magdalene’s conversion, preserved in both Latin and various vernacular manuscripts."
          embed={
            <iframe
              title="Medieval Mary Magdalene presentation"
              src="https://docs.google.com/presentation/d/e/2PACX-1vS2gQ7RgqVbEzuKN-P2KnwmsCmDuKNFJSRkInCtLQS7SGyMyo5hWcspyIsumo-6rpa8HqjUxPld5A9J/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="480"
              height="299"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          }
          link="https://docs.google.com/presentation/d/1P9rUvHdW_cFKDrsUmLyAyq9a6Qw_ssz8XMBNL49E1HI/edit?usp=sharing"
        />
        <ResourceCard
          title="Josquin Research Project"
          description="Josquin Research Project makes music of Josquin des Prez searchable through digitization to enable comparative analysis"
          embed={
            <iframe
              title="Josquin research project presentation"
              src="https://docs.google.com/presentation/d/e/2PACX-1vS8iTzG2dkSXq5zKsNgxKBIJ9PIrrDPTdjhx4kAwc4rUF2a5GSs9d0_55FO91E69I8DcZvvi0oo316q/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="480"
              height="299"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          }
          link="https://docs.google.com/presentation/d/1hwMHLEedJeGVEybq7ppDofKmwcTFwI1Rf3BwwK-2xpY/edit?usp=sharing"
        />
        <ResourceCard
          title="Neural Neighbors"
          description="Neural Neighbors combines these two data-mining techniques to illuminate the conventions of portraiture and other visual genres in the 19th century. Neural Neighbors suggests new ways of understanding this interaction between circulation, social context, and artistic form in the Meserve-Kunhardt Collection."
          embed={
            <iframe
              title="Neural neighbors presentation"
              src="https://docs.google.com/presentation/d/e/2PACX-1vRBqA2RZzAb0UGn6rQELY18YJaRdjr1OFjr3yTELCz2aukpwg4iF2WGmCwhRH8ZR6Lj3NoMW5nIZJ1w/embed?start=false&loop=false&delayms=3000"
              frameBorder="0"
              width="480"
              height="299"
              allowFullScreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          }
          link="https://docs.google.com/presentation/d/1O6b5V85dtGVmHNQ0h-mEGl6IOsmjF9bfjb-UlpZVGb0/edit?usp=sharing"
        />
        <ResourceCard
          title="Club Info Video"
          description="An information video about the MV Digital Humanities Club!"
          embed={
            <iframe
              title="Club info video"
              width="480"
              height="299"
              src="https://www.youtube-nocookie.com/embed/ZIJvQGWoIfM"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          }
          link="https://www.youtube.com/watch?v=ZIJvQGWoIfM"
        />
      </div>
    </div>
  );
}
