type Ingredient = {
  name: string;
  quantity: string;
  unit: string;
};

type Props = {
  ingredients: Ingredient[];
  onAddIngredient: () => void;
  onRemoveIngredient: (index: number) => void;
  onUpdateIngredient: (index: number, field: keyof Ingredient, value: string) => void;
};

export default function IngredientsCard({ 
  ingredients, 
  onAddIngredient, 
  onRemoveIngredient, 
  onUpdateIngredient 
}: Props) {
  return (
    <section className="card">
      <h2 className="section-title">
        <span className="material-symbols-outlined icon-green">
          shopping_basket
        </span>
        Ingredientes
      </h2>

      <div className="ingredients-list">
        {ingredients.map((ing, idx) => (
          <div className="ingredient-row" key={idx}>
            <input 
              type="text" 
              value={ing.name}
              onChange={(e) => onUpdateIngredient(idx, 'name', e.target.value)}
              placeholder="Ingrediente"
              required={idx === 0}
            />
            <input 
              type="text" 
              value={ing.quantity}
              onChange={(e) => onUpdateIngredient(idx, 'quantity', e.target.value)}
              placeholder="Cantidad"
              required={idx === 0}
            />
            <select 
              value={ing.unit}
              onChange={(e) => onUpdateIngredient(idx, 'unit', e.target.value)}
            >
              <option>gramos (g)</option>
              <option>kilogramos (kg)</option>
              <option>mililitros (ml)</option>
              <option>litros (l)</option>
              <option>unidades</option>
              <option>cucharadas</option>
            </select>
            <button 
              type="button" 
              className="delete-btn"
              onClick={() => onRemoveIngredient(idx)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>

      <button type="button" className="add-btn" onClick={onAddIngredient}>
        <span className="material-symbols-outlined">add_circle</span>
        Agregar ingrediente
      </button>
    </section>
  );
}
