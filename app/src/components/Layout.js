import React from 'react';

import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

export default function Layout({ children, title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `MVDH | ${title}` : 'MVDH'}</title>
        <meta
          name="description"
          content="Monta Vista Digital Humanities Club hosts meetings every Tuesday in Room A204 (or online). Digital Humanities is a rising interdisciplinary field based on the study of art, culture, literature, etc. using modern digital tools."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <meta property="og:image" content="/open_graph.jpg" />
        <meta
          property="og:title"
          content="Monta Vista Digital Humanities Club"
        />
        <meta
          property="og:description"
          content="MVDH meets every Tuesday in Room A204 (or online). Digital Humanities is a rising interdisciplinary field based on the study of art, culture, literature, etc. using modern digital tools."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Helmet>
      <Header />

      <div className="pt-12 md:pt-16 bg-primary-300">
        {children}
        <Footer />
      </div>
    </div>
  );
}
