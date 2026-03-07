type RecipeCardProps = {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
  ingredients: { name: string; quantity: string; unit: string }[];
  onToggleFavorite: (id: number) => void;
};

export default function RecipeCard({
  id,
  title,
  description,
  isFavorite,
  ingredients,
  onToggleFavorite,
}: RecipeCardProps) {
  const topIngredients = ingredients.slice(0, 3);

  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>

          <div className="card-header-actions">
            <button
              type="button"
              className={`icon-btn ${isFavorite ? "active" : ""}`}
              onClick={() => onToggleFavorite(id)}
              aria-label={isFavorite ? "Quitar de favoritas" : "Marcar como favorita"}
              title={isFavorite ? "Quitar de favoritas" : "Marcar como favorita"}
            >
              <span className="material-symbols-outlined">star</span>
            </button>

            <span className="pill">{ingredients.length} ingredientes</span>
          </div>
        </div>

        <p>{description}</p>

        <div className="ingredients-preview">
          {topIngredients.map((ing, idx) => (
            <div key={idx} className="ingredient-item">
              {ing.name}
            </div>
          ))}
          {ingredients.length > topIngredients.length && (
            <div className="ingredient-item more">+{ingredients.length - topIngredients.length} más</div>
          )}
        </div>

        <button
          type="button"
          className="btn-secondary"
          onClick={() => (window.location.href = `/recipes/${id}`)}
        >
          Ver detalle
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
