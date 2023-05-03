type Props = {
  title: string;
  subtitle?: string;
};
const Heading = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="text-gradient mt-6 w-fit text-4xl font-bold capitalize">{title}</h1>
      {subtitle && <h2 className="text-md mb-4 text-base-content">{subtitle}</h2>}
    </>
  );
};

export default Heading;
