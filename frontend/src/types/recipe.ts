export type Ingredient = {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  recipeId: number;
};

export type Recipe = {
  id: number;
  title: string;
  description: string | null;
  steps: string | null;
  isFavorite: boolean;
  userId: number;
  Ingredients?: Ingredient[];
  createdAt: string;
};
