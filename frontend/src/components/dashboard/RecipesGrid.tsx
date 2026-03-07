import RecipeCard from "./RecipeCard";

type RecipeItem = {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
  ingredients: { name: string; quantity: string; unit: string }[];
};

type Props = {
  recipes: RecipeItem[];
  onToggleFavorite: (id: number) => void;
};

export default function RecipesGrid({ recipes, onToggleFavorite }: Props) {
  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          description={recipe.description}
          isFavorite={recipe.isFavorite}
          ingredients={recipe.ingredients}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
