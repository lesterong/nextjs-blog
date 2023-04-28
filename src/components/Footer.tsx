import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="absolute bottom-4 w-full space-x-4 text-center text-sm">
      <Link className="link-primary" href="https://www.lesterong.com">
        lesterong.com
      </Link>
      <Link className="link-primary" href="https://github.com/lesterong">
        GitHub
      </Link>
      <Link className="link-primary" href="https://linkedin.com/in/lesterongpc">
        LinkedIn
      </Link>
    </footer>
  );
};

export default Footer;
