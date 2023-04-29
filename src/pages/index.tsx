import { getAllPosts } from '../../utils/api';
import Post from '../../types/post.type';
import PostCard from '@/components/PostCard';

type Props = {
  posts: Post[];
};

const HomePage = ({ posts }: Props) => {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
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
