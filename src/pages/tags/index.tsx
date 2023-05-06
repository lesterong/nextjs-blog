import { getPostsTags } from '../../../lib/api';
import Link from 'next/link';
import Heading from '@/components/Heading';
import { SITE_TITLE } from '../../../lib/constants';
import Head from 'next/head';
import Container from '@/components/Container';

type Props = {
  tags: string[];
};

const TagsPage = ({ tags }: Props) => {
  return (
    <>
      <Head>
        <title>{`Tags | ${SITE_TITLE}`}</title>
        <meta name="description" content={`All tags in ${SITE_TITLE}`} />
      </Head>
      <Container>
        <Heading title="Tags" />
        <div className="mt-6 flex flex-wrap gap-6">
          {tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              className="link-fill text-2xl font-bold capitalize"
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
      </Container>
    </>
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
