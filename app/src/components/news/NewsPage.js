import React from 'react';
import NewsCard from './NewsCard';

export default function HomePage() {
  return (
    <div className="max-w-5xl my-20 py-8 mx-auto px-12 bg-primary-100 rounded-lg">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">News</span>
      </h1>
      <div className="my-4">
        <NewsCard
          title="Example blog post"
          link="/"
          description="This is an example blog post with an interesting description that is somewhat long. This is an example blog post with an interesting description that is somewhat long. This is an example blog post with an interesting description that is somewhat long. This is an example blog post with an interesting description that is somewhat long. "
          date="January 1, 2025"
        />
        <NewsCard
          title="Example blog post"
          link="/"
          description="This is an example blog post with an interesting description that is somewhat long."
          date="January 1, 2025"
        />
        <NewsCard
          title="Example blog post"
          link="/"
          description="This is an example blog post with an interesting description that is somewhat long."
          date="January 1, 2025"
        />
      </div>
    </div>
  );
}
