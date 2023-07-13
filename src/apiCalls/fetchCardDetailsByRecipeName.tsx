type RecipeResponse = {
  recipePage: string;
};

const fetchCardDetailsByRecipeName = async (
  recipeName: string
): Promise<RecipeResponse> => {
  const fetchCardDetails = await fetch(
    ` https://mealtime-dkgl.onrender.com/api/recipe/${recipeName}`
  );

  const [response] = await fetchCardDetails.json();

  const recipeInfo = {
    recipePage: response.strSource,
  };
  return recipeInfo;
};

export default fetchCardDetailsByRecipeName;
