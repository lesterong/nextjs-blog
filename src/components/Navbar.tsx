import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <Link href="/" className="my-4 text-4xl">
        {`Lester's Blog.`}
      </Link>
    </nav>
  );
};

export default Navbar;
