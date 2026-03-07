import { useEffect, useState } from "react";
import { Recipe, getRecipeById } from "@/services/recipes";

function getAuthToken(): string | undefined {
  return localStorage.getItem("token") ?? undefined;
}

export function useRecipe(recipeId: number) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const token = getAuthToken();
        const data = await getRecipeById(recipeId, token);

        setRecipe(data);
      } catch (error) {
        console.error("Error cargando receta:", error);
        setRecipe(null);
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [recipeId]);

  return { recipe, loading };
}
