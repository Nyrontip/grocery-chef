type IngredientsCardProps = {
  ingredients: { name: string; quantity: string; unit: string }[];
};

export default function IngredientsCard({ ingredients }: IngredientsCardProps) {
  return (
    <div className="ingredients-card">
      <h3 className="section-title">
        <span className="material-symbols-outlined section-icon">shopping_basket</span>
        Ingredients
      </h3>
      <ul className="ingredients-list">
        {ingredients.map((ing, i) => (
          <li key={i}>
            {ing.quantity} {ing.unit} {ing.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
