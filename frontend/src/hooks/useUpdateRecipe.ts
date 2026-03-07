import { useState } from "react";
import { updateRecipe, Recipe } from "@/services/recipes";

export function useUpdateRecipe(recipeId: number) {
  const [loading, setLoading] = useState(false);

  const update = async (data: Omit<Recipe, "id" | "isFavorite">) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token") ?? undefined;

      await updateRecipe(recipeId, data, token);
    } finally {
      setLoading(false);
    }
  };

  return { update, loading };
}
