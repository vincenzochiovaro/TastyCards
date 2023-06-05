type Category = {
  id: number;
  category_name: string;
};

type RandomRecipeType = {
  id: number;
  title: string;
  image: string;
};

export const fetchCategories = async (): Promise<Category[] | null> => {
  try {
    const response = await fetch(
      "https://mealtime-dkgl.onrender.com/api/categories"
    );
    const categories = await response.json();

    return categories;
  } catch (err) {
    console.log(err, "fetchCategories");
    return null;
  }
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
