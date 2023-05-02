import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ArchivePage = () => {
  const { replace } = useRouter();

  useEffect(() => {
    void replace('/archives/1');
  }, [replace]);
};

export default ArchivePage;
