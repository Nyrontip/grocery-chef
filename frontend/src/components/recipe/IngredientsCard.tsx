type IngredientsCardProps = {
  ingredients: string[];
};

export default function IngredientsCard({ ingredients }: IngredientsCardProps) {
  return (
    <div className="ingredients-card">
      <h3>Ingredients</h3>
      {ingredients.map((item, i) => (
        <label key={i}>
          <input type="checkbox" /> {item}
        </label>
      ))}
    </div>
  );
}
