type RecipeCardProps = {
  title: string;
  time: string;
  description: string;
};

export default function RecipeCard({
  title,
  time,
  description,
}: RecipeCardProps) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>

          <span className="time">{time}</span>
        </div>

        <p>{description}</p>

        <button className="btn-secondary">
          Ver detalle
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
