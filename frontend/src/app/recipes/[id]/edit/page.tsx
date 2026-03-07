import Navbar from "@/components/recipeForm/Navbar";
import BasicInfoCard from "@/components/recipeForm/BasicInfoCard";
import IngredientsCard from "@/components/recipeForm/IngredientsCard";
import StepsCard from "@/components/recipeForm/StepsCard";
import FormActions from "@/components/recipeForm/FormActions";

import "@/styles/recipeForm.css";

// Datos quemados de ejemplo
const recipeExample = {
  title: "Lasaña de Berenjena",
  shortDescription: "Receta familiar con salsa casera y mucho queso",
  ingredients: [
    { name: "Berenjena", amount: 2, unit: "unidades" },
    { name: "Queso mozzarella", amount: 200, unit: "gramos" },
    { name: "Salsa de tomate casera", amount: 300, unit: "ml" },
  ],
  steps: `1. Cortar las berenjenas y asarlas.
2. Preparar la salsa de tomate.
3. Montar la lasaña y hornear 25 min.`,
};

export default function EditRecipePage() {
  return (
    <>
      <Navbar />

      <main className="container">
        <div className="title-section">
          <h1>Editar Receta</h1>
          <p>
            Modifica los detalles de tu receta. Los cambios se guardarán al
            enviar el formulario.
          </p>
        </div>

        <form className="form">
          <BasicInfoCard
            initialTitle={recipeExample.title}
            initialDescription={recipeExample.shortDescription}
          />

          <IngredientsCard initialIngredients={recipeExample.ingredients} />

          <StepsCard initialSteps={recipeExample.steps} />

          <FormActions />
        </form>
      </main>
    </>
  );
}
