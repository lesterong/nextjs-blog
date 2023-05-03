import { getPostBySlug, getPostsSlugs } from '../../../lib/api';
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
};

const PostPage = ({ post }: Props) => {
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
  const post = getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
};
