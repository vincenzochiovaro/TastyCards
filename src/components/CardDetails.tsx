import { useParams } from "react-router-dom";
import fetchCardDetailsByRecipeName from "../apiCalls/fetchCardDetailsByRecipeName";
import "../styles/cardDetails.css";
import { useEffect, useState } from "react";
import { Button, Figure } from "react-bootstrap";
import openRecipe from "../images/openRecipe.png";
import updateVoteCount from "../apiCalls/updateVoteCount";

type RecipeInfo = {
  recipeId: string;
  recipeTitle: string;
  recipePage: string;
};

const CardDetails = () => {
  const { recipeName = "" } = useParams();
  const { category = "" } = useParams();
  const [cardDetails, setCardDetails] = useState<RecipeInfo | null>(null);
  const [voteChange, setVoteChange] = useState<number>(0);

  const incVote = async () => {
    const updatedVoteCount = await updateVoteCount(recipeName, category);
    setVoteChange(updatedVoteCount);
  };

  useEffect(() => {
    const fetchCardByRecipeName = async () => {
      const response = await fetchCardDetailsByRecipeName(recipeName);
      setCardDetails(response);
    };
    fetchCardByRecipeName();
  }, [recipeName]);

  return (
    <div>
      <div>
        <h2 className="cardDetails__recipeTitle">{cardDetails?.recipeTitle}</h2>
        <a href={cardDetails?.recipePage} target="_blank">
          <Figure className="cardDetails__figureContainer">
            <Figure.Image
              className="cardDetails__figureImg"
              alt="Figure Image"
              src={openRecipe}
            />
          </Figure>
        </a>

        {voteChange === 0 ? (
          <Button onClick={incVote}>Leave a Like</Button>
        ) : (
          <Button>Like {voteChange}</Button>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
