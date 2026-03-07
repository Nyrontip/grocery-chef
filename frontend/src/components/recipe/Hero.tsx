type HeroProps = {
  title: string;
  description: string;
  tags?: string[];
};

export default function Hero({ title, description, tags = [] }: HeroProps) {
  return (
    <section className="hero">
      {tags.length > 0 && (
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i} className={i === 0 ? "tag primary" : "tag"}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
