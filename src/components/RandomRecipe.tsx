import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import randomImage from "../images/random.png";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchRandomRecipe } from "../apiCalls/fetchRandomRecipe";
import RandomRecipeDetail from "./RandomRecipeDetail";
import "../styles/randomRecipe.css";
import LoadingWindow from "./LoadingWindow";

type RandomRecipeType = {
  id: number;
  title: string;
  image: string;
};

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState<RandomRecipeType[] | null>(null);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const randomRecipeData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchRandomRecipe();
        setRecipe(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setRecipe(null);
        setIsLoading(false);
      }
    };
    randomRecipeData();
  }, [count]);

  if (count === 0) {
    return (
      <Container className="d-flex align-items-center justify-content-center randomRecipe__Container">
        <Card className="randomRecipe__Card animate__animated animate__fadeInDown">
          <Card.Img variant="top" src={randomImage} />
          <Card.Body>
            <Card.Title data-testid="decisionTitle">
              Can't Decide What to Eat Today?
            </Card.Title>
            <Card.Text>Don't worry, we've got you covered!</Card.Text>
            <Button
              onClick={() => setCount(count + 1)}
              variant="primary"
              className="randomRecipe__Button"
            >
              Generate
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  if (isLoading) {
    return <LoadingWindow />;
  }

  return (
    <Container className="d-flex align-items-center justify-content-center randomRecipe__Container">
      <Card className="randomRecipe__Card animate__animated animate__fadeInDown">
        {recipe?.map((info) => (
          <Card.Img key={info.id} variant="top" src={info.image} />
        ))}

        <Card.Body>
          {recipe?.map((info) => (
            <Card.Text key={info.id}>
              What about: <strong>{info.title}</strong>
            </Card.Text>
          ))}
          <Card.Title>Why not generate another one?</Card.Title>
          <Row>
            <Col>
              <Button
                onClick={() => setCount(count + 1)}
                variant="primary"
                className="randomRecipe__Button"
              >
                Generate
              </Button>
            </Col>
            <Col>
              <RandomRecipeDetail
                recipeTitle={recipe?.map((recipe) => recipe.title) ?? []}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RandomRecipe;
