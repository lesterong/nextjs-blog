import Link from 'next/link';
import Logo from '@/components/Logo';
import { Figtree } from 'next/font/google';
import { themeChange } from 'theme-change';
import { useEffect, useState } from 'react';

const figtree = Figtree({ subsets: ['latin'] });

const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 fill-current stroke-current stroke-2"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
};

const Moon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 fill-current stroke-current stroke-2"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};

const Navbar = () => {
  const [showDark, setShowDark] = useState<null | boolean>(null);
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    }

    if (localStorage.getItem('theme') === 'dark') {
      setShowDark(true);
    } else {
      setShowDark(false);
    }

    // https://github.com/saadeghi/theme-change/issues/30
    themeChange(false);
    return () => {
      themeChange(false);
    };
  }, []);
  return (
    <nav
      className={`container flex max-w-4xl items-center justify-between px-6 ${figtree.className}`}
    >
      <Link href="/" className="my-4 flex items-center">
        <Logo />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="font-bold uppercase">blog</span>
      </Link>
      <div className="flex items-center space-x-6">
        <Link href="/tags" className="link-underline link">
          Tags
        </Link>
        <div className="swap swap-rotate swap-active">
          <button
            data-set-theme="dark"
            className={`${!showDark ? 'swap-on z-10' : 'swap-off'} ${
              showDark === null && 'hidden'
            }`}
            onClick={() => setShowDark(true)}
          >
            <Sun />
          </button>
          <button
            data-set-theme="light"
            className={`${showDark ? 'swap-on z-10' : 'swap-off'} ${showDark === null && 'hidden'}`}
            onClick={() => setShowDark(false)}
          >
            <Moon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
