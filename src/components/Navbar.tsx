import Link from 'next/link';
import Logo from '@/components/Logo';
import { Figtree } from 'next/font/google';
import { useRouter } from 'next/router';

const figtree = Figtree({ subsets: ['latin'] });

const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      className={`container flex max-w-4xl items-center justify-between px-6 ${figtree.className}`}
    >
      <Link href="/" className="my-4 flex items-center">
        <Logo />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="font-bold uppercase">blog</span>
      </Link>
      <div className="flex space-x-3">
        <Link
          href="/tags"
          className={`link-underline link ${router.pathname === '/tags' && 'text-primary'}`}
        >
          Tags
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
