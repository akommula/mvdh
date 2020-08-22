import React from 'react';
import NewsCard from './NewsCard';
import { graphql, StaticQuery } from 'gatsby';

export default function HomePage() {
  return (
    <div className="max-w-4xl py-16 px-4 sm:px-12 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">News</span>
      </h1>
      <div className="my-4">
        <StaticQuery
          query={graphql`
            query {
              googleSheet {
                News {
                  title
                  description
                  date
                }
              }
            }
          `}
          render={data =>
            data.googleSheet.News.map(r => <NewsCard key={r.title} {...r} />)
          }
        />
      </div>
    </div>
  );
}
