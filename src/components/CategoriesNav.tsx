import { useEffect, useState } from "react";
import { fetchCategories } from "../apiCalls";
import { Link } from "react-router-dom";
import "../styles/categoriesNav.css";

type categoryListData = {
  id: number;
  category_name: string;
};

const CategoriesNav = () => {
  const [categoryList, setCategoryList] = useState<categoryListData[] | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = await fetchCategories();
        setCategoryList(categories);
      } catch (error) {
        console.log("Error fetching categories:", error);
        setCategoryList(null);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="categories-nav">
      {categoryList?.map((category) => (
        <Link
          key={category.id}
          to={`/recipes/${category.category_name}`}
          className="category-link animate__animated animate__fadeInUp"
          data-testid="categoryList"
        >
          {category.category_name}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesNav;
