import RecipeCard from "./RecipeCard";

const recipes = [
  {
    title: "Paella Valenciana",
    time: "35 min",
    description:
      "Receta tradicional con arroz bomba, azafrán de hebra y una selección de mariscos frescos del Mediterráneo.",
  },
  {
    title: "Tacos al Pastor",
    time: "25 min",
    description:
      "Auténticos tacos mexicanos con carne de cerdo marinada en achiote, piña asada, cilantro y cebolla.",
  },
  {
    title: "Ensalada César",
    time: "15 min",
    description:
      "Clásica y refrescante ensalada con lechuga romana, aderezo cremoso casero, crutones de ajo y parmesano.",
  },
];

export default function RecipesGrid() {
  return (
    <div className="recipes">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </div>
  );
}
