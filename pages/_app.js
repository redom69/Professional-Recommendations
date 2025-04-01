import '../styles/globals.css';
import 'primeicons/primeicons.css';
import { UserProvider } from '../context/UserContext';
import { RecommendationProvider } from '../context/RecommendationContext';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <RecommendationProvider>
        <Component {...pageProps} />
      </RecommendationProvider>
    </UserProvider>
  );
}
