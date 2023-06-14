type RecipeDetailType = {
  instructions: string;
  ingredients: { ingredient: string; measure: string }[];
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
