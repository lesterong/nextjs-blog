import Link from 'next/link';
import Tag from '@/components/Tag';
import DateTime from '@/components/DateTime';
import Post from '../../types/post.type';
import { useRouter } from 'next/router';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const { pathname } = useRouter();
  const hideTag = pathname.includes('/tags/');
  return (
    <article
      key={post.slug}
      className="border-b border-b-base-content/20 py-6 last-of-type:border-0"
    >
      <header className="mb-1">
        <Link href={`/posts/${post.slug}`} className="link-underline link">
          <h2 className="text-xl font-bold">{post.title}</h2>
        </Link>
        <div>
          {!hideTag && (
            <>
              <Tag tag={post.tag} />
              <span className="text-sm">&nbsp;&#183;&nbsp;</span>
            </>
          )}
          <DateTime date={post.date} />
        </div>
      </header>
      <p className="text-sm text-base-content/80">{post.summary}</p>
    </article>
  );
};

export default PostCard;
