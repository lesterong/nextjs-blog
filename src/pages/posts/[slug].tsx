import { getAllPosts, getPostBySlug, getPostsSlugs } from '../../../utils/api';
import Post from '../../../types/post.type';
import ReactMarkdown from 'react-markdown';
import Tag from '../../components/Tag';
import DateTime from '../../components/DateTime';
import Navbar from '../../components/Navbar';

type Props = {
  post: Post;
};
const PostPage = ({ post }: Props) => {
  return (
    <article className="container max-w-2xl">
      <header className="my-4">
        <Tag tag={post.tag} />
        <span className="text-sm">&nbsp;&#183;&nbsp;</span>
        <DateTime date={post.date} />
        <h1 className="text-4xl font-bold">{post.title}</h1>
      </header>
      <div className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const slugs = getPostsSlugs();
  const paths = slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
};
