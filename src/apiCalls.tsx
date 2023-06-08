type CategoryType = {
  id: number;
  category_name: string;
};

type RandomRecipeType = {
  id: number;
  title: string;
  image: string;
};

type RecipeDetailType = {
  instructions: string;
  ingredients: { ingredient: string; measure: string }[];
};

export const fetchCategories = async (): Promise<CategoryType[] | null> => {
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

export const fetchRecipeDetails = async (
  recipeTitle: string[]
): Promise<RecipeDetailType | null> => {
  try {
    const joinedTtitle = recipeTitle.join(",");

    const response = await fetch(
      `https://mealtime-dkgl.onrender.com/api/recipe/${joinedTtitle}`
    );

    const recipeDetails = await response.json();

    const [recipeDetailsObject] = recipeDetails;

    const ingredients = [];
    const instructions = recipeDetailsObject.strInstructions;
    for (let i = 0; i < 20; i++) {
      const ingredient = recipeDetailsObject[`strIngredient${i}`];
      const measure = recipeDetailsObject[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push({ ingredient, measure });
      }
    }

    return { instructions, ingredients };
  } catch (error) {
    console.log(error, "fetchRecipeDetails");
    return null;
  }
};
