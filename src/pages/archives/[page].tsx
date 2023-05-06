import { getNumberOfArchivedPages, getArchivedPostsByPage } from '../../../lib/api';
import Head from 'next/head';
import { SITE_TITLE } from '../../../lib/constants';
import Heading from '@/components/Heading';
import PostCard from '@/components/PostCard';
import Post from '../../../types/post.type';
import PageNav from '@/components/PageNav';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Container from '@/components/Container';

type Props = {
  posts: Post[];
  page: number;
  totalPages: number;
};

const PaginatedPage = ({ posts, page, totalPages }: Props) => {
  const { replace } = useRouter();
  useEffect(() => {
    if (posts.length === 0) {
      void replace('/');
    }
  });

  return (
    <>
      <Head>
        <title>{`Archives Page ${page} | ${SITE_TITLE}`}</title>
        <meta name="description" content="A blog about tech" />
      </Head>
      <Container>
        <Heading title={`Archives: Page ${page}`} />
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        <PageNav page={page} totalPages={totalPages} renderPageLink={(page) => `${page}`} />
      </Container>
    </>
  );
};

export default PaginatedPage;

export const getStaticPaths = async () => {
  const numOfPages = getNumberOfArchivedPages();
  const paths = new Array(numOfPages)
    .fill(1)
    .map((prev, index) => prev + index)
    .map((page) => {
      return {
        params: {
          page: String(page),
        },
      };
    });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: { page: string } }) => {
  const page = Number(params.page) || 1;
  const totalPages = getNumberOfArchivedPages();
  const posts = getArchivedPostsByPage(page);

  return {
    props: {
      page,
      totalPages,
      posts,
    },
  };
};
