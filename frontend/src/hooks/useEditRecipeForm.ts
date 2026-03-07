"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { Recipe, Ingredient } from "@/services/recipes";
import { useUpdateRecipe } from "@/hooks/useUpdateRecipe";

// Recibe los estados controlados como argumentos
export function useEditRecipeForm(
  recipe: Recipe | null,
  recipeId: number,
  title: string,
  description: string,
  steps: string,
  ingredients: Ingredient[],
) {
  const router = useRouter();
  const { update, loading } = useUpdateRecipe(recipeId);

  const handleCancel = () => {
    router.push(`/recipes/${recipeId}`);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data: Recipe = {
      id: recipeId,
      title,
      description,
      steps,
      Ingredients: ingredients,
    };

    console.log("Datos a enviar:", data);

    await update(data);

    router.push(`/recipes/${recipeId}`);
  };

  return {
    handleSubmit,
    handleCancel,
    updating: loading,
  };
}
