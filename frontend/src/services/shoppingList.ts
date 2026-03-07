import * as api from "./api";

export type ShoppingListItem = {
  ingredient: string;
  amount: number;
  unit: string;
  category: string;
};

export const generateShoppingList = (recipeIds: string[]) =>
  api.post<ShoppingListItem[]>("/shopping-list", { recipeIds });

export const getShoppingList = (id: string) =>
  api.get<ShoppingListItem[]>(`/shopping-list/${id}`);
