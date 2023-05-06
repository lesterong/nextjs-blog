import { getLatestPosts, hasArchivedPosts } from '../../lib/api';
import Post from '../../types/post.type';
import PostCard from '@/components/PostCard';
import { SITE_TITLE } from '../../lib/constants';
import Head from 'next/head';
import Heading from '@/components/Heading';
import Link from 'next/link';
import Container from '@/components/Container';

type Props = {
  posts: Post[];
  hasArchives: boolean;
};

const HomePage = ({ posts, hasArchives }: Props) => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content="A blog about tech" />
      </Head>
      <Container>
        <Heading
          title="Latest Posts"
          subtitle="Some of the things that have been keeping me up lately!"
        />
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
        {hasArchives && (
          <Link href="/archives/1" className="btn-sm btn my-4 rounded-lg normal-case">
            View more
          </Link>
        )}
      </Container>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const posts = getLatestPosts();
  const hasArchives = hasArchivedPosts();
  return {
    props: {
      posts,
      hasArchives,
    },
  };
};
