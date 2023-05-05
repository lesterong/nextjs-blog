import {
  getNextPostBySlug,
  getPostBySlug,
  getPostsSlugs,
  getPreviousPostBySlug,
} from '../../../lib/api';
import Post from '../../../types/post.type';
import ReactMarkdown from 'react-markdown';
import Tag from '../../components/Tag';
import DateTime from '../../components/DateTime';
import Head from 'next/head';
import { SITE_TITLE } from '../../../lib/constants';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Link from 'next/link';

type Props = {
  post: Post;
  previousPost: Post | null;
  nextPost: Post | null;
};

const PostPage = ({ post, previousPost, nextPost }: Props) => {
  return (
    <>
      <Head>
        <title>{`${post.title} | ${SITE_TITLE}`}</title>
        <meta name="description" content={post.summary} />
      </Head>
      <article className="container mb-6 max-w-2xl">
        <header className="my-4">
          <Tag tag={post.tag} />
          <span className="text-sm">&nbsp;&#183;&nbsp;</span>
          <DateTime date={post.date} />
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </header>
        <div className="prose">
          <ReactMarkdown
            components={{
              // https://github.com/orgs/remarkjs/discussions/684#discussioncomment-616455
              pre({ node, ...props }) {
                return <>{props.children}</>;
              },
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter language={match[1]} style={atomOneDark} showLineNumbers>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    {...props}
                    className={`${className} rounded-md bg-[#FAFAFA] dark:bg-[#282C34]`}
                  >
                    {children}
                  </code>
                );
              },
              a({ href, children }) {
                return <Link href={String(href)}>{children}</Link>;
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        <nav className="mt-6 flex w-full">
          {previousPost && (
            <div className="flex flex-1 flex-col items-start">
              <span className="text-xs font-bold uppercase">Previous Post</span>
              <Link href={`./${previousPost.slug}`} className="link-primary inline-block max-w-fit">
                {previousPost.title}
              </Link>
            </div>
          )}
          {nextPost && (
            <div className="flex flex-1 flex-col items-end">
              <span className="text-xs font-bold uppercase">Next Post</span>
              <Link href={`./${nextPost.slug}`} className="link-primary inline-block max-w-fit">
                {nextPost.title}
              </Link>
            </div>
          )}
        </nav>
      </article>
    </>
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
  const { slug } = params;
  const post = getPostBySlug(slug);
  const previousPost = getPreviousPostBySlug(slug);
  const nextPost = getNextPostBySlug(slug);
  return {
    props: {
      post,
      previousPost,
      nextPost,
    },
  };
};
