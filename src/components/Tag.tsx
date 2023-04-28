const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase text-transparent">
      {tag}
    </span>
  );
};

export default Tag;
