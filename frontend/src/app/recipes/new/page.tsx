"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/recipeForm/Navbar";
import BasicInfoCard from "@/components/recipeForm/BasicInfoCard";
import IngredientsCard from "@/components/recipeForm/IngredientsCard";
import StepsCard from "@/components/recipeForm/StepsCard";
import FormActions from "@/components/recipeForm/FormActions";
import { createRecipe, type Recipe, type Ingredient } from "@/services/recipes";

import "@/styles/recipeForm.css";

export default function NewRecipePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { name: "", quantity: "", unit: "gramos (g)" }
  ]);

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "", unit: "gramos (g)" }]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, field: keyof Ingredient, value: string) => {
    const updated = [...ingredients];
    updated[index] = { ...updated[index], [field]: value };
    setIngredients(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !steps.trim()) {
      alert("Por favor completa el título y los pasos de la receta");
      return;
    }

    const validIngredients = ingredients.filter(ing => ing.name.trim() && ing.quantity.trim());
    
    if (validIngredients.length === 0) {
      alert("Por favor agrega al menos un ingrediente");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token") || undefined;
      
      const recipeData = {
        title: title.trim(),
        description: description.trim() || null,
        steps: steps.trim(),
        ingredients: validIngredients
      };

      await createRecipe(recipeData, token);
      
      sessionStorage.setItem("toast", "Receta creada exitosamente");
      router.push("/dashboard");
    } catch (error) {
      alert(error instanceof Error ? error.message : "Error creando la receta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="container">
        <div className="title-section">
          <h1>Crear Nueva Receta</h1>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <BasicInfoCard 
            title={title}
            description={description}
            onTitleChange={setTitle}
            onDescriptionChange={setDescription}
          />

          <IngredientsCard
            ingredients={ingredients}
            onAddIngredient={addIngredient}
            onRemoveIngredient={removeIngredient}
            onUpdateIngredient={updateIngredient}
          />

          <StepsCard steps={steps} onStepsChange={setSteps} />

          <FormActions loading={loading} />
        </form>
      </main>
    </>
  );
}
