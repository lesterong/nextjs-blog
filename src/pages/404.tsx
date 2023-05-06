import Container from '@/components/Container';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Container>
      <div className="grid h-[82vh] place-content-center">
        <h1 className="text-center text-4xl font-bold">404 Not Found</h1>
        <p className="mx-auto my-1 w-fit">
          Head to the&nbsp;
          <Link href="/" className="link-underline text-primary">
            homepage
          </Link>
          .
        </p>
      </div>
    </Container>
  );
};

export default NotFoundPage;
