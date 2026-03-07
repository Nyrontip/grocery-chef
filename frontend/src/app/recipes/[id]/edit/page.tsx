"use client";

import Navbar from "@/components/recipeForm/Navbar";
import BasicInfoCard from "@/components/recipeForm/BasicInfoCard";
import IngredientsCard from "@/components/recipeForm/IngredientsCard";
import StepsCard from "@/components/recipeForm/StepsCard";
import FormActions from "@/components/recipeForm/FormActions";

import { useRecipe } from "@/hooks/useRecipe";
import { useEditRecipeForm } from "@/hooks/useEditRecipeForm";

import "@/styles/recipeForm.css";

export default function EditRecipePage({ params }: { params: { id: string } }) {
  const recipeId = Number(params.id);

  const { recipe, loading } = useRecipe(recipeId);

  const { ingredients, setIngredients, handleSubmit, handleCancel, updating } =
    useEditRecipeForm(recipe, recipeId);

  if (loading) {
    return <p>Cargando receta...</p>;
  }

  if (!recipe) {
    return <p>No se encontró la receta.</p>;
  }

  return (
    <>
      <Navbar onClose={handleCancel} />

      <main className="container">
        <div className="title-section">
          <h1>Editar Receta</h1>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <BasicInfoCard
            initialTitle={recipe.title}
            initialDescription={recipe.description ?? ""}
          />

          <IngredientsCard
            ingredients={ingredients}
            setIngredients={setIngredients}
          />

          <StepsCard initialSteps={recipe.steps ?? ""} />

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
