import { getPostsTags, getNumberOfPagesByTag, getPostsByTagAndPage } from '../../../../lib/api';
import Head from 'next/head';
import { SITE_TITLE } from '../../../../lib/constants';
import Heading from '@/components/Heading';
import Post from '../../../../types/post.type';
import PostCard from '@/components/PostCard';
import { toTitleCase } from '../../../../lib/utils';
import PageNav from '@/components/PageNav';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Container from '@/components/Container';

type Props = {
  posts: Post[];
  page: number;
  totalPages: number;
  tag: string;
};

const PaginatedPage = ({ posts, page, totalPages, tag }: Props) => {
  const { replace } = useRouter();
  useEffect(() => {
    if (page === 1) {
      void replace(`/tags/${tag}`);
    }
  });

  return (
    <>
      <Head>
        <title>{`${toTitleCase(tag)} Page ${page} | ${SITE_TITLE}`}</title>
        <meta name="description" content={`In ${toTitleCase(tag)}`} />
      </Head>
      <Container>
        <Heading title={`${tag}: Page ${page}`} />
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        <PageNav
          page={page}
          totalPages={totalPages}
          renderPageLink={(page) => `../${tag}/${page}`}
        />
      </Container>
    </>
  );
};

export default PaginatedPage;

export const getStaticPaths = async () => {
  const tags = getPostsTags();
  let paths: { params: { tag: string; page: string } }[] = [];

  tags.map((tag) => {
    const numOfPages = getNumberOfPagesByTag(tag);
    const tagPaths = new Array(numOfPages)
      .fill(1)
      .map((prev, index) => prev + index)
      .map((page) => {
        return {
          params: {
            tag: String(tag),
            page: String(page),
          },
        };
      });
    paths = paths.concat(tagPaths);
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: { page: string; tag: string } }) => {
  const page = Number(params.page) || 1;
  const tag = String(params.tag);
  const totalPages = getNumberOfPagesByTag(tag);
  const posts = getPostsByTagAndPage(page, tag);

  return {
    props: {
      page,
      totalPages,
      posts,
      tag,
    },
  };
};
