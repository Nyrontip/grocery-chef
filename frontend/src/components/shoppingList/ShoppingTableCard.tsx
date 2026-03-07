"use client";

import { Ingredient } from "@/services/recipes";

type Props = {
  ingredients: Ingredient[];
};

export default function ShoppingTableCard({ ingredients }: Props) {
  return (
    <section className="card">
      <div className="card-header">
        <h2>Resultado de la Lista</h2>
        <p>Ingredientes consolidados de las recetas seleccionadas.</p>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Cantidad</th>
              <th>Unidad</th>
            </tr>
          </thead>

          <tbody>
            {ingredients.length === 0 ? (
              <tr>
                <td colSpan={3}>No hay ingredientes seleccionados.</td>
              </tr>
            ) : (
              ingredients.map((ingredient, index) => (
                <tr key={ingredient.id ?? index}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.quantity}</td>
                  <td>{ingredient.unit}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
