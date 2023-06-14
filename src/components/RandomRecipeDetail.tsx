import { useEffect, useState } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { fetchRecipeDetails } from "../apiCalls/fetchRecipeDetails";
import "../styles/randomRecipeDetail.css";

type RandomRecipeDetailProps = {
  recipeTitle: string[];
};

type RecipeDetailType = {
  instructions: string;
  ingredients: { ingredient: string; measure: string }[];
};

const RandomRecipeDetail = ({ recipeTitle }: RandomRecipeDetailProps) => {
  const [show, setShow] = useState(false);
  const [recipeInstructions, setRecipeInstructions] =
    useState<RecipeDetailType | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const randomRecipeDetailData = async () => {
      try {
        const response = await fetchRecipeDetails(recipeTitle);
        setRecipeInstructions(response);
      } catch (error) {
        console.log(error, "randomRecipeDetailData");
      }
    };
    randomRecipeDetailData();
  }, [recipeTitle]);

  return (
    <>
      <Button className="view-recipe-button" onClick={handleShow}>
        View Recipe
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="random-recipe-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{recipeTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Ingredients:</h5>
          <ul>
            {recipeInstructions?.ingredients.map((recipe, index) => (
              <li key={index}>
                <strong>{recipe.ingredient}</strong> - {recipe.measure}
              </li>
            ))}
          </ul>
          <br />
          <h5>Instructions:</h5>
          <ol>
            {recipeInstructions?.instructions.split(". ").map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RandomRecipeDetail;
