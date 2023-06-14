type Recipe = {
  id: number;
  category: string;
  image: string;
  instructions: string;
  title: string;
  youtube: string;
  ingredients: {
    ingredient: string;
    measurement: string;
  }[];
};

export const fetchCardsByCategory = async (
  category: string
): Promise<Recipe[]> => {
  const response = await fetch(
    `https://mealtime-dkgl.onrender.com/api/recipes/${category}`
  );

  const recipesByCategory: Recipe[] = await response.json();

  return recipesByCategory;
};
