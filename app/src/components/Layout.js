import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-12 md:pt-16 bg-primary-300">
        {children}
        <Footer />
      </div>
    </div>
  );
}
