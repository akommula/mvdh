import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image/index';

import ProjectCard from './ProjectCard';

const WithImageData = ({ withImageData }) => (
  <StaticQuery
    query={graphql`
      query {
        neural_neighbors: file(
          relativePath: { eq: "images/neural_neighbors.png" }
        ) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        josquin: file(relativePath: { eq: "images/josquin.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mary: file(relativePath: { eq: "images/mary.png" }) {
          childImageSharp {
            fixed(width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data =>
      withImageData([
        {
          img: <Img fixed={data.neural_neighbors.childImageSharp.fixed} />,
          title: 'Neural Neighbors',
          description:
            'Neural Neighbors combines these two data-mining techniques to illuminate the conventions of portraiture and other visual genres in the 19th century. Neural Neighbors suggests new ways of understanding this interaction between circulation, social context, and artistic form in the Meserve-Kunhardt Collection.',
          link:
            'https://docs.google.com/presentation/d/1O6b5V85dtGVmHNQ0h-mEGl6IOsmjF9bfjb-UlpZVGb0/edit?usp=sharing',
        },
        {
          img: <Img fixed={data.josquin.childImageSharp.fixed} />,
          title: 'Josquin Research Project',
          description:
            'Josquin Research Project makes music of Josquin des Prez searchable through digitization to enable comparative analysis',
          link:
            'https://docs.google.com/presentation/d/1hwMHLEedJeGVEybq7ppDofKmwcTFwI1Rf3BwwK-2xpY/edit?usp=sharing',
        },
        {
          img: <Img fixed={data.mary.childImageSharp.fixed} />,
          title: 'Exploring Medieval Mary Magdalene',
          description:
            'An online collection of digital editions containing a late medieval legend of Mary Magdalene’s conversion, preserved in both Latin and various vernacular manuscripts.',
          link:
            'https://docs.google.com/presentation/d/1P9rUvHdW_cFKDrsUmLyAyq9a6Qw_ssz8XMBNL49E1HI/edit?usp=sharing',
        },
      ])
    }
  />
);

export default function ExamplesCard() {
  return (
    <div className="mb-56 py-12 px-6 sm:px-8 md:px-16 lg:px-24 bg-primary-100">
      <div className="my-8 mx-auto max-w-lg text-center">
        <h2 className="text-4xl mb-4">Example Projects</h2>
      </div>
      <div className="my-4 flex flex-row mx-auto lg:justify-center overflow-x-scroll">
        <WithImageData
          withImageData={imgData =>
            imgData.map(img => (
              <ProjectCard
                image={img.img}
                title={img.title}
                description={img.description}
                link={img.link}
                key={img.title}
              />
            ))
          }
        />
      </div>
    </div>
  );
}
