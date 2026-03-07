type HeaderProps = {
  isFavorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

export default function Header({
  isFavorite,
  onBack,
  onToggleFavorite,
  onDelete,
  onEdit,
}: HeaderProps) {
  return (
    <header className="header">
      <button type="button" className="back-btn" onClick={onBack}>
        <span className="arrow">←</span>
        <span>Volver</span>
      </button>

      <div className="header-buttons">
        <button
          type="button"
          className={isFavorite ? "icon-btn active" : "icon-btn"}
          onClick={onToggleFavorite}
        >
          <span className="material-symbols-outlined">
            {isFavorite ? "star" : "star_outline"}
          </span>
        </button>

        <button type="button" className="icon-btn delete" onClick={onDelete}>
          <span className="material-symbols-outlined">delete</span>
        </button>

        <button type="button" className="edit-btn" onClick={onEdit}>
          Edit Recipe
        </button>
      </div>
    </header>
  );
}
