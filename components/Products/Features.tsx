const Features = ({ features }: { features: string }) => {
  return (
    <article>
      <h3>Features</h3>
      <p className="opacity-50">{features}</p>
    </article>
  );
};

export default Features;
