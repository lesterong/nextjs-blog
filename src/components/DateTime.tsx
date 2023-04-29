type Props = {
  date: string;
};

const DateTime = ({ date }: Props) => {
  const parsedDate = new Date(date).toDateString().substring(4);
  return <span className="font-mono text-xs uppercase">{parsedDate}</span>;
};

export default DateTime;
