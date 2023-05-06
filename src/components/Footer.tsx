import Link from 'next/link';
import Container from '@/components/Container';

const Footer = () => {
  return (
    <Container>
      <footer className="mt-2 flex items-center justify-between py-4 text-xs">
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
    </Container>
  );
};

export default Footer;
