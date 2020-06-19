import React from 'react';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-16 md:pt-20">{children}</div>
    </div>
  );
}
