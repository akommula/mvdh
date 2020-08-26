import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image/index';

const WithImageData = ({ withImageData }) => (
  <StaticQuery
    query={graphql`
      query {
        neural_neighbors: file(
          relativePath: { eq: "images/neural_neighbors.png" }
        ) {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        josquin: file(relativePath: { eq: "images/josquin.png" }) {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        mary: file(relativePath: { eq: "images/mary.png" }) {
          childImageSharp {
            fixed(width: 400) {
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

function Slides({ imgData }) {
  const [curImg, setCurImg] = useState(0);

  function prevImg() {
    if (curImg > 0) setCurImg(curImg - 1);
    else setCurImg(imgData.length - 1);
  }

  function nextImg() {
    if (curImg < imgData.length - 1) setCurImg(curImg + 1);
    else setCurImg(0);
  }

  return (
    <>
      <div className="relative border border-primary-900 rounded">
        <div>
          {imgData[curImg].img}
          <div
            className="absolute bottom-0 left-0 w-full h-24 overflow-y-scroll text-primary-100 p-2 z-10"
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <a
              href={imgData[curImg].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="text-xl font-medium">{imgData[curImg].title}</h4>
            </a>
            <p className="leading-tight font-light">
              {imgData[curImg].description}
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-12 h-full text-primary-100 flex items-center justify-center pointer-events-none">
          <button
            className="p-2 rounded-full text-3xl bg-primary-800 sm:opacity-0 hover:opacity-100 transition duration-300 pointer-events-auto"
            onClick={prevImg}
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-6 h-6 text-white"
            >
              <path
                fill="currentColor"
                d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                className=""
              />
            </svg>
          </button>
        </div>
        <div className="absolute top-0 right-0 w-12 h-full text-primary-100 flex items-center justify-center pointer-events-none">
          <button
            className="p-2 rounded-full text-3xl bg-primary-800 sm:opacity-0 hover:opacity-100 transition duration-300 pointer-events-auto"
            onClick={nextImg}
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-6 h-6 text-white"
            >
              <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                className=""
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-center my-3 justify-center">
        {imgData.map((_, i) => (
          <button className="mx-1 p-1" key={i} onClick={() => setCurImg(i)}>
            {i === curImg ? (
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </>
  );
}

export default function Slideshow() {
  return (
    <div className="mt-8 lg:mt-0">
      <div className="text-center text-lg font-light mb-2">
        Projects we will discuss this year:
      </div>

      <WithImageData withImageData={imgData => <Slides imgData={imgData} />} />
    </div>
  );
}
