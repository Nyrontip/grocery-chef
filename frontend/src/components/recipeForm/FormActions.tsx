export default function FormActions() {
  return (
    <div className="actions">
      <button type="button" className="cancel-btn">
        Cancelar
      </button>

      <button type="submit" className="save-btn">
        <span className="material-symbols-outlined">save</span>
        Guardar receta
      </button>
    </div>
  );
}
