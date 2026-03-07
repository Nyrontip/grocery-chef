"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, FormEventHandler } from "react";

import { Recipe, Ingredient } from "@/services/recipes";
import { useUpdateRecipe } from "@/hooks/useUpdateRecipe";

export function useEditRecipeForm(recipe: Recipe | null, recipeId: number) {
  const router = useRouter();
  const { update, loading } = useUpdateRecipe(recipeId);

  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    if (recipe?.Ingredients) {
      setIngredients(recipe.Ingredients);
    }
  }, [recipe]);

  const handleCancel = () => {
    router.push(`/recipes/${recipeId}`);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: Recipe = {
      id: recipeId,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      steps: formData.get("steps") as string,
      Ingredients: ingredients,
    };

    await update(data);

    router.push("/recipes");
  };

  return {
    ingredients,
    setIngredients,
    handleSubmit,
    handleCancel,
    updating: loading,
  };
}
