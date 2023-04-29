import Link from 'next/link';
import Logo from '@/components/Logo';
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <nav
      className={`container flex max-w-4xl items-center justify-between px-6 ${figtree.className}`}
    >
      <Link href="/" className="my-4 flex items-center">
        <Logo />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="font-bold uppercase">blog</span>
      </Link>
      <Link href="https://www.github.com/lesterong/nextjs-blog" className="link-underline link">
        GitHub
      </Link>
    </nav>
  );
};

export default Navbar;
