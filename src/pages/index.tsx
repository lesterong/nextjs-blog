import { getAllPosts } from '../../utils/api';
import Post from '../../types/post.type';
import { GetStaticProps } from 'next';

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      {posts.map((post) => {
        const date = new Date(post.date).toDateString().substring(4);
        return (
          <article key={post.slug} className="border-b border-b-base-content/20 py-6 last:border-0">
            <header className="mb-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold text-transparent">
                {post.tag.toUpperCase()}
              </span>
              <span className="text-sm">&nbsp;&#183;&nbsp;</span>
              <span className="font-mono text-xs">{date.toUpperCase()}</span>
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
