import { getAllPosts } from '../../lib/api';
import Post from '../../types/post.type';
import PostCard from '@/components/PostCard';
import { SITE_TITLE } from '../../lib/constants';
import Head from 'next/head';

type Props = {
  posts: Post[];
};

const HomePage = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content="A blog about tech" />
      </Head>
      <div className="container mx-auto max-w-4xl px-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
