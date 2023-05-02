import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className={`container mt-2 flex max-w-4xl items-center justify-between px-6 py-4 text-xs`}
    >
      <Link className="link-fill text-primary" target="_blank" href="https://www.lesterong.com">
        lesterong.com
      </Link>
      <div>
        <Link
          href="https://github.com/lesterong/nextjs-blog"
          target="_blank"
          className="link-fill text-primary"
        >
          nextjs-blog
        </Link>
        &nbsp;by Lester Ong.
      </div>
    </footer>
  );
};

export default Footer;
