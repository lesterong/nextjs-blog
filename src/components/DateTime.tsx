type Props = {
  date: string;
};

const DateTime = ({ date }: Props) => {
  const parsedDate = new Date(date).toUTCString().substring(5, 16);
  return <span className="font-mono text-xs uppercase">{parsedDate}</span>;
};

export default DateTime;
