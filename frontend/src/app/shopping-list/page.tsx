"use client";

import { useEffect, useState } from "react";

import Header from "@/components/shared/Header";
import RecipeSelectionCard from "@/components/shoppingList/RecipeSelectionCard";
import ShoppingTableCard from "@/components/shoppingList/ShoppingTableCard";

import {
  getAllRecipes,
  getIngredientsByRecipesIds,
  Recipe,
  Ingredient,
} from "@/services/recipes";

import "@/styles/shoppingList.css";

export default function ShoppingListPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipes, setSelectedRecipes] = useState<number[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  const loadRecipes = async () => {
    try {
      const token = localStorage.getItem("token") ?? undefined;
      const data = await getAllRecipes(token);
      setRecipes(data);
    } catch (error) {
      console.error("Error cargando recetas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  const handleGenerate = async () => {
    if (selectedRecipes.length === 0) {
      setIngredients([]);
      return;
    }

    try {
      const token = localStorage.getItem("token") ?? undefined;
      const ingredients = await getIngredientsByRecipesIds(
        selectedRecipes,
        token,
      );
      setIngredients(ingredients);
    } catch (error) {
      console.error("Error generando lista:", error);
    }
  };

  if (loading) {
    return <p>Cargando recetas...</p>;
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <RecipeSelectionCard
            recipes={recipes}
            selectedRecipes={selectedRecipes}
            setSelectedRecipes={setSelectedRecipes}
            onGenerate={handleGenerate}
          />
          <ShoppingTableCard ingredients={ingredients} />
        </div>
      </main>
    </>
  );
}
