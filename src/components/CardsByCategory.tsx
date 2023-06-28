import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchCardsByCategory } from "../apiCalls/fetchCardsByCategory";
import PopupWindow from "./LoadingWindow";
import { Button } from "react-bootstrap";
import "../styles/cardsByCategory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

type Recipes = {
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

const CardsByCategory = () => {
  const [recipesByCategory, setRecipesByCategory] = useState<Recipes[] | null>(
    null
  );
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category) {
          const response = await fetchCardsByCategory(category);
          setRecipesByCategory(response);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  if (isLoading) {
    return <PopupWindow />;
  }

  if (error) {
    return (
      <div className="cardsByCat__container">
        <h1 className="text-center">Error</h1>
        <p className="text-center">
          There has been an error processing your request.
        </p>
      </div>
    );
  }

  if (recipesByCategory) {
    return (
      <div className="cardsByCat__container">
        <h1 data-testid="categoryTitle">{category}</h1>
        <div className="cardsByCat__row">
          {recipesByCategory.map((recipe) => (
            <div className="col-md-4 cardsByCat__col" key={recipe.id}>
              <div className="card mb-4">
                <img
                  src={recipe.image}
                  className="cardsByCat__img"
                  alt={recipe.title}
                />
                <div className="cardsByCat__body ">
                  <h5 className="cardsByCat__title">{recipe.title}</h5>
                  <Link to={`recipe/${recipe.title}`}>
                    <Button className="cardsByCat__openButton">OPEN</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a className="cardsByCat__upArrow" href="#">
          <FontAwesomeIcon icon={faCircleArrowUp} />
        </a>
      </div>
    );
  }

  return null;
};

export default CardsByCategory;
