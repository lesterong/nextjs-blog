const DateTime = ({ date }: { date: string }) => {
  const parsedDate = new Date(date).toDateString().substring(4);
  return <span className="font-mono text-xs uppercase">{parsedDate}</span>;
};

export default DateTime;
