import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default App;
