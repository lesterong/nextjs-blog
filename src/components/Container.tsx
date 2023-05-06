import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container max-w-4xl px-4">{children}</div>;
};

export default Container;
