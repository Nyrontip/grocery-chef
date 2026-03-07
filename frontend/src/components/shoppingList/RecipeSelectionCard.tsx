export default function RecipeSelectionCard() {
  return (
    <section className="card">
      <div className="card-header">
        <h2>Seleccionar Recetas</h2>
        <p>
          Marca las recetas que quieres incluir en tu lista de compras semanal.
        </p>
      </div>

      <div className="recipes">
        <label className="recipe">
          <input type="checkbox" />
          <div>
            <span>Pasta Carbonara</span>
            <small>20 min • 4 personas</small>
          </div>
        </label>

        <label className="recipe">
          <input type="checkbox" />
          <div>
            <span>Ensalada César</span>
            <small>15 min • 2 personas</small>
          </div>
        </label>

        <label className="recipe">
          <input type="checkbox" />
          <div>
            <span>Pollo al Horno</span>
            <small>45 min • 4 personas</small>
          </div>
        </label>
      </div>

      <div className="actions">
        <button className="btn-secondary">Limpiar selección</button>
        <button className="btn-primary">
          <span className="material-symbols-outlined">receipt_long</span>
          Generar lista
        </button>
      </div>
    </section>
  );
}
