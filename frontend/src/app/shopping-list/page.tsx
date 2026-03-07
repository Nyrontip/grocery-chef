import Header from "@/components/shared/Header";
import RecipeSelectionCard from "@/components/shoppingList/RecipeSelectionCard";
import ShoppingTableCard from "@/components/shoppingList/ShoppingTableCard";

import "@/styles/shoppingList.css";

export default function ShoppingListPage() {
  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <RecipeSelectionCard />
          <ShoppingTableCard />
        </div>
      </main>
    </>
  );
}
