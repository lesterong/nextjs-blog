import Link from 'next/link';

type Props = {
  page: number;
  totalPages: number;
  renderPageLink: (page: number) => string;
};

const PageNav = ({ page, totalPages, renderPageLink }: Props) => {
  if (totalPages === 1) {
    return <></>;
  }

  return (
    <nav className="my-4">
      <Link
        href={renderPageLink(page - 1)}
        className={`${page <= 1 && 'btn-disabled'} btn-sm btn rounded-l-lg rounded-r-none`}
      >
        {'<'}
      </Link>
      <button className="btn-sm btn rounded-none normal-case first:rounded-l-lg last:rounded-r-lg">
        Page {page} of {totalPages}
      </button>
      <Link
        href={renderPageLink(page + 1)}
        className={`${
          page === totalPages && 'btn-disabled'
        } btn-sm btn rounded-l-none rounded-r-lg`}
      >
        {'>'}
      </Link>
    </nav>
  );
};

export default PageNav;
