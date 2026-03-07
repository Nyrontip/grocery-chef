type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};

type Props = {
  initialIngredients?: Ingredient[];
};

export default function IngredientsCard({ initialIngredients = [] }: Props) {
  return (
    <section className="card">
      <h2 className="section-title">
        <span className="material-symbols-outlined icon-green">
          shopping_basket
        </span>
        Ingredientes
      </h2>

      {initialIngredients.map((ing, idx) => (
        <div className="ingredient-row" key={idx}>
          <input type="text" defaultValue={ing.name} />
          <input type="number" defaultValue={ing.amount} />
          <select defaultValue={ing.unit}>
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
      ))}

      <button type="button" className="add-btn">
        <span className="material-symbols-outlined">add_circle</span>
        Agregar ingrediente
      </button>
    </section>
  );
}
