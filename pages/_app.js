import React from 'react';

import { UserProvider } from '../context/UserContext';
import { RecommendationProvider } from '../context/RecommendationContext';

import '../styles/globals.css';
import 'primeicons/primeicons.css';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <RecommendationProvider>
        <Component {...pageProps} />
      </RecommendationProvider>
    </UserProvider>
  );
}
