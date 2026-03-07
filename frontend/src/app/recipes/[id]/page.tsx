import Header from "@/components/recipe/Header";
import Hero from "@/components/recipe/Hero";
import StatsCard from "@/components/recipe/StatsCard";
import IngredientsCard from "@/components/recipe/IngredientsCard";
import StepsCard from "@/components/recipe/StepsCard";
import Footer from "@/components/recipe/Footer";

import "@/styles/recipe.css";

export default function RecipePage() {
  return (
    <div className="container">
      <Header />

      <Hero
        title="Mediterranean Quinoa Salad"
        description="A vibrant and nutritious powerhouse packed with protein-rich quinoa, crisp cucumbers, sun-ripened tomatoes, and a zesty lemon-herb vinaigrette."
        tags={["Healthy", "Vegan"]}
      />

      <div className="grid">
        <div className="left-column">
          <StatsCard time="25 min" calories="320 kcal" serves="4 Pers." />
          <IngredientsCard
            ingredients={[
              "1 cup uncooked quinoa",
              "2 cups vegetable broth",
              "1 English cucumber, diced",
              "1 pint cherry tomatoes",
              "1/2 cup Kalamata olives",
              "1/4 cup olive oil",
              "Juice of 1 lemon",
              "Fresh parsley and mint",
            ]}
          />
        </div>

        <div className="right-column">
          <StepsCard
            steps={[
              "Rinse quinoa and cook with vegetable broth for 15 minutes.",
              "Chop cucumber, tomatoes, olives and herbs.",
              "Mix olive oil, lemon juice, garlic, oregano, salt and pepper.",
              "Combine everything and toss well. Serve chilled or room temperature.",
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
