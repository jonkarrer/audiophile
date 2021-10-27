const Features = ({ features }: { features: string }) => {
  return (
    <article className="grid gap-10 lg:w-635">
      <h3>Features</h3>
      <p className="opacity-50">{features}</p>
    </article>
  );
};

export default Features;
