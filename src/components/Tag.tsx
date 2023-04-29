import Link from 'next/link';

type Props = {
  tag: string;
};

const Tag = ({ tag }: Props) => {
  return (
    <Link
      href={`/tags/${tag}`}
      className="text-gradient text-xs font-semibold uppercase hover:border-b"
    >
      {tag}
    </Link>
  );
};

export default Tag;
