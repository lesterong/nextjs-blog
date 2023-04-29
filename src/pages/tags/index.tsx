import { getPostsTags } from '../../../lib/api';
import Link from 'next/link';

type Props = {
  tags: string[];
};

const TagsPage = ({ tags }: Props) => {
  return (
    <div className="container mt-6 flex max-w-4xl flex-wrap gap-6 px-6">
      {tags.map((tag) => (
        <Link
          href={`/tags/${tag}`}
          className="text-gradient link-fill text-4xl font-bold capitalize"
          key={tag}
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default TagsPage;

export const getStaticProps = async () => {
  const tags = getPostsTags();
  return {
    props: {
      tags,
    },
  };
};
