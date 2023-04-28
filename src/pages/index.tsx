import { getAllPosts } from '../../utils/api';
import Post from '../../types/post.type';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import DateTime from '../components/DateTime';
import Tag from '../components/Tag';

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      {posts.map((post) => {
        return (
          <article key={post.slug} className="border-b border-b-base-content/20 py-6 last:border-0">
            <header className="mb-2">
              <Link href={`posts/${post.slug}`} className="link-hover link">
                <h2 className="text-xl font-bold">{post.title}</h2>
              </Link>
              <Tag tag={post.tag} />
              <span className="text-sm">&nbsp;&#183;&nbsp;</span>
              <DateTime date={post.date} />
            </header>
            <p className="text-base-content/80">{post.summary}</p>
          </article>
        );
      })}
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
