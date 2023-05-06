import { getNumberOfPagesByTag, getPostsByTagAndPage, getPostsTags } from '../../../../lib/api';
import Post from '../../../../types/post.type';
import PostCard from '@/components/PostCard';
import { SITE_TITLE } from '../../../../lib/constants';
import Head from 'next/head';
import { toTitleCase } from '../../../../lib/utils';
import Heading from '@/components/Heading';
import PageNav from '@/components/PageNav';
import Container from '@/components/Container';

type Props = {
  tag: string;
  posts: Post[];
  totalPages: number;
};

const TagPage = ({ tag, posts, totalPages }: Props) => {
  return (
    <>
      <Head>
        <title>{`${toTitleCase(tag)} | ${SITE_TITLE}`}</title>
        <meta name="description" content={`In ${toTitleCase(tag)}`} />
      </Head>
      <Container>
        <Heading title={`${tag}: Page 1`} />
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        <PageNav page={1} totalPages={totalPages} renderPageLink={(page) => `${tag}/${page}`} />
      </Container>
    </>
  );
};

export default TagPage;

export const getStaticPaths = async () => {
  const tags = getPostsTags();
  const paths = tags.map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: { tag: string } }) => {
  const tag = String(params.tag);
  const totalPages = getNumberOfPagesByTag(tag);
  const posts = getPostsByTagAndPage(1, tag);
  return {
    props: {
      tag,
      posts,
      totalPages,
    },
  };
};
