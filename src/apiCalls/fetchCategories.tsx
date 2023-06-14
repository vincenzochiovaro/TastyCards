type CategoryType = {
  id: number;
  category_name: string;
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
