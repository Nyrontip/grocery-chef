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

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      {
        name: "",
        quantity: "",
        unit: "",
      },
    ]);
  };

  const removeIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="card">
      <h2>Ingredientes</h2>

      {ingredients.map((ingredient, index) => (
        <div key={index} className="ingredient-row">
          <input
            type="text"
            placeholder="Nombre"
            value={ingredient.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />

          <input
            type="text"
            placeholder="Cantidad"
            value={ingredient.quantity}
            onChange={(e) => handleChange(index, "quantity", e.target.value)}
          />

          <input
            type="text"
            placeholder="Unidad"
            value={ingredient.unit}
            onChange={(e) => handleChange(index, "unit", e.target.value)}
          />

          <button type="button" onClick={() => removeIngredient(index)}>
            Eliminar
          </button>
        </div>
      ))}

      <button type="button" onClick={addIngredient}>
        + Añadir ingrediente
      </button>
    </section>
  );
}
