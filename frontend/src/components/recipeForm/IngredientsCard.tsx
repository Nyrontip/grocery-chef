export default function IngredientsCard() {
  return (
    <section className="card">
      <h2 className="section-title">
        <span className="material-symbols-outlined icon-green">
          shopping_basket
        </span>
        Ingredientes
      </h2>

      <div className="ingredient-row">
        <input type="text" placeholder="Harina de trigo" />
        <input type="number" placeholder="500" />
        <select>
          <option>gramos (g)</option>
          <option>kilogramos (kg)</option>
          <option>mililitros (ml)</option>
          <option>litros (l)</option>
          <option>unidades</option>
          <option>cucharadas</option>
        </select>
        <button type="button" className="delete-btn">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>

      <button type="button" className="add-btn">
        <span className="material-symbols-outlined">add_circle</span>
        Agregar ingrediente
      </button>
    </section>
  );
}
