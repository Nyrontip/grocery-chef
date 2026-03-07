"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/recipeForm/Navbar";
import BasicInfoCard from "@/components/recipeForm/BasicInfoCard";
import IngredientsCard from "@/components/recipeForm/IngredientsCard";
import StepsCard from "@/components/recipeForm/StepsCard";
import FormActions from "@/components/recipeForm/FormActions";
import { Ingredient } from "@/services/recipes";

import { useRecipe } from "@/hooks/useRecipe";
import { useEditRecipeForm } from "@/hooks/useEditRecipeForm";

import "@/styles/recipeForm.css";

type Props = { params: Promise<{ id: string }> };

export default function EditRecipePage({ params }: Props) {
  // Extraer id de params Promise
  const { id } = React.use(params);
  const recipeId = Number(id);

  // Cargar receta
  const { recipe, loading } = useRecipe(recipeId);

  // Estados controlados para inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // Inicializar estados cuando se cargue la receta
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description ?? "");
      setSteps(recipe.steps ?? "");
      setIngredients(recipe.Ingredients ?? []);
    }
  }, [recipe]);

  // Hook para manejar submit y cancel
  const { handleSubmit, handleCancel, updating } = useEditRecipeForm(
    recipe,
    recipeId,
    title,
    description,
    steps,
    ingredients,
  );

  if (loading) return <p>Cargando receta...</p>;
  if (!recipe) return <p>No se encontró la receta.</p>;

  return (
    <>
      <Navbar onClose={handleCancel} />

      <main className="container">
        <div className="title-section">
          <h1>Editar Receta</h1>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <BasicInfoCard
            title={title}
            description={description}
            onTitleChange={setTitle}
            onDescriptionChange={setDescription}
          />

          <IngredientsCard
            ingredients={ingredients}
            setIngredients={setIngredients}
          />

          <StepsCard steps={steps} onStepsChange={setSteps} />

          <FormActions
            onCancel={handleCancel}
            isSubmitting={updating}
            submitLabel="Actualizar receta"
          />
        </form>
      </main>
    </>
  );
}
