type RandomRecipeType = {
  id: number;
  title: string;
  image: string;
};

export const fetchRandomRecipe = async (): Promise<
  RandomRecipeType[] | null
> => {
  try {
    const response = await fetch(
      "https://mealtime-dkgl.onrender.com/api/recipe/random"
    );
    const randomRecipe = (await response.json()) as RandomRecipeType[];
    return randomRecipe;
  } catch (error) {
    console.log(error);
    return null;
  }
};
