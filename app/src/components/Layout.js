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
      </Helmet>
      <Header />
      <div className="pt-12 md:pt-16 bg-primary-300">
        {children}
        <Footer />
      </div>
    </div>
  );
}
