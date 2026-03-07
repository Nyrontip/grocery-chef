"use client";

import { Ingredient } from "@/services/recipes";

type Props = {
  ingredients: Ingredient[];
  setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>;
};

export default function IngredientsCard({
  ingredients,
  setIngredients,
}: Props) {
  // Actualiza un ingrediente
  const handleChange = (
    index: number,
    field: keyof Ingredient,
    value: string,
  ) => {
    setIngredients((prev) =>
      prev.map((ingredient, i) =>
        i === index ? { ...ingredient, [field]: value } : ingredient,
      ),
    );
  };

  // Añade un ingrediente vacío
  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { name: "", quantity: "", unit: "gramos (g)" },
    ]);
  };

  // Elimina un ingrediente por índice
  const removeIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="card">
      <h2>Ingredientes</h2>

      <div className="ingredients-list">
        {ingredients.map((ingredient, idx) => (
          <div className="ingredient-row" key={idx}>
            <input
              type="text"
              placeholder="Ingrediente"
              value={ingredient.name}
              onChange={(e) => handleChange(idx, "name", e.target.value)}
              required={idx === 0}
            />
            <input
              type="text"
              placeholder="Cantidad"
              value={ingredient.quantity}
              onChange={(e) => handleChange(idx, "quantity", e.target.value)}
              required={idx === 0}
            />
            <select
              value={ingredient.unit}
              onChange={(e) => handleChange(idx, "unit", e.target.value)}
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
              onClick={() => removeIngredient(idx)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>

      <button type="button" className="add-btn" onClick={addIngredient}>
        <span className="material-symbols-outlined">add_circle</span>
        Agregar ingrediente
      </button>
    </section>
  );
}
