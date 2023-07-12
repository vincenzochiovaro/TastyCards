const updateVoteCount = async (recipeName: string, category: string) => {
  try {
    const response = await fetch(
      `https://mealtime-dkgl.onrender.com/api/recipe/${recipeName}/${category}`,
      {
        method: "PATCH",
      }
    );

    const [updatedRecipeVoteCount] = await response.json();

    return updatedRecipeVoteCount.votecount;
  } catch (error) {}
};

export default updateVoteCount;
