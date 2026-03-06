import Navbar from "@/components/recipeForm/Navbar";
import BasicInfoCard from "@/components/recipeForm/BasicInfoCard";
import IngredientsCard from "@/components/recipeForm/IngredientsCard";
import StepsCard from "@/components/recipeForm/StepsCard";
import FormActions from "@/components/recipeForm/FormActions";

import "@/styles/recipeForm.css";

export default function NewRecipePage() {
  return (
    <>
      <Navbar />

      <main className="container">
        <div className="title-section">
          <h1>Crear Nueva Receta</h1>
          <p>
            Comparte tu talento culinario con el mundo. Completa los detalles a
            continuación.
          </p>
        </div>

        <form className="form">
          <BasicInfoCard />

          <IngredientsCard />

          <StepsCard />

          <FormActions />
        </form>
      </main>
    </>
  );
}
