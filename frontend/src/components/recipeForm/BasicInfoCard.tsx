type Props = {
  title?: string;
  description?: string;
  onTitleChange?: (value: string) => void;
  onDescriptionChange?: (value: string) => void;
};

export default function BasicInfoCard({ 
  title = "", 
  description = "", 
  onTitleChange, 
  onDescriptionChange 
}: Props) {
  return (
    <section className="card">
      <h2 className="section-title">
        <span className="material-symbols-outlined icon-green">info</span>
        Información Básica
      </h2>

      <div className="form-group">
        <label htmlFor="title">Título de la Receta</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => onTitleChange?.(e.target.value)}
          placeholder="Ej: Pasta Carbonara"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción (opcional)</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange?.(e.target.value)}
          placeholder="Describe brevemente tu receta..."
          rows={3}
          className="form-textarea"
          required
        />
      </div>
    </section>
  );
}
