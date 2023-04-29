import Link from 'next/link';

type Props = {
  tag: string;
};

const Tag = ({ tag }: Props) => {
  return (
    <Link
      href={`/tags/${tag}`}
      className="text-gradient link-fill text-xs font-semibold uppercase hover:bg-none hover:bg-clip-border"
    >
      {tag}
    </Link>
  );
};

export default Tag;
