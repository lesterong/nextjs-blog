import {
  getNumberOfPagesByTag,
  getPostsByTag,
  getPostsByTagAndPage,
  getPostsTags,
} from '../../../../lib/api';
import Post from '../../../../types/post.type';
import PostCard from '@/components/PostCard';
import { SITE_TITLE } from '../../../../lib/constants';
import Head from 'next/head';
import { toTitleCase } from '../../../../lib/utils';
import Heading from '@/components/Heading';
import Link from 'next/link';

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
      <div className="container mx-auto max-w-4xl px-6">
        <Heading title={`${tag}: Page 1`} />
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        <div className="my-4">
          <button className="btn-sm btn rounded-none normal-case first:rounded-l-lg last:rounded-r-lg">
            Page 1 of {totalPages}
          </button>
          {1 !== totalPages && (
            <Link href={`${tag}/2`} className="btn-sm btn rounded-l-none rounded-r-lg">
              {'>'}
            </Link>
          )}
        </div>
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
