import { Recipe } from "@/types/recipe";

export async function getRecipeById(
  id: number,
  token?: string,
): Promise<Recipe | null> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recipes/${id}`,
    {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const data: Recipe = await response.json();

  return data;
}
