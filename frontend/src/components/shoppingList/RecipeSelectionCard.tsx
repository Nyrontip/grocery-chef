"use client";

import { Recipe } from "@/services/recipes";

type Props = {
  recipes: Recipe[];
  selectedRecipes: number[];
  setSelectedRecipes: React.Dispatch<React.SetStateAction<number[]>>;
  onGenerate: () => void;
};

export default function RecipeSelectionCard({
  recipes,
  selectedRecipes,
  setSelectedRecipes,
  onGenerate,
}: Props) {
  const toggleRecipe = (id: number) => {
    setSelectedRecipes((prev) =>
      prev.includes(id)
        ? prev.filter((recipeId) => recipeId !== id)
        : [...prev, id],
    );
  };

  const clearSelection = () => {
    setSelectedRecipes([]);
  };

  return (
    <section className="card">
      <div className="card-header">
        <h2>Seleccionar Recetas</h2>
        <p>
          Marca las recetas que quieres incluir en tu lista de compras semanal.
        </p>
      </div>

      <div className="recipes">
        {recipes.map((recipe) => (
          <label key={recipe.id} className="recipe">
            <input
              type="checkbox"
              checked={selectedRecipes.includes(recipe.id)}
              onChange={() => toggleRecipe(recipe.id)}
            />

            <div>
              <span>{recipe.title}</span>
              <small>{recipe.Ingredients?.length ?? 0} ingredientes</small>
            </div>
          </label>
        ))}
      </div>

      <div className="actions">
        <button
          type="button"
          className="btn-secondary"
          onClick={clearSelection}
        >
          Limpiar selección
        </button>

        <button
          type="button"
          className="btn-primary"
          onClick={onGenerate}
          disabled={selectedRecipes.length === 0}
        >
          <span className="material-symbols-outlined">receipt_long</span>
          Generar lista
        </button>
      </div>
    </section>
  );
}
