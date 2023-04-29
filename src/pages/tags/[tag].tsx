import { getPostsByTag, getPostsTags } from '../../../lib/api';
import Post from '../../../types/post.type';
import PostCard from '@/components/PostCard';
import { SITE_TITLE } from '../../../lib/constants';
import Head from 'next/head';
import { toTitleCase } from '../../../lib/utils';
import Heading from '@/components/Heading';

type Props = {
  tag: string;
  posts: Post[];
};

const TagPage = ({ tag, posts }: Props) => {
  return (
    <>
      <Head>
        <title>{`${toTitleCase(tag)} | ${SITE_TITLE}`}</title>
        <meta name="description" content={`In ${toTitleCase(tag)}`} />
      </Head>
      <div className="container mx-auto max-w-4xl px-6">
        <Heading title={tag} />
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} hideTag />
        ))}
      </div>
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
  const posts = getPostsByTag(params.tag);
  return {
    props: {
      tag: params.tag,
      posts,
    },
  };
};
