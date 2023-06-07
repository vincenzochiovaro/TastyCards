import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import RandomRecipeDetail from "../components/RandomRecipeDetail";

afterEach(() => {
  cleanup();
});

describe("RandomRecipeDetail", () => {
  test("should render 'View Recipe' Button ", () => {
    const testRecipeTitle = ["Test Recipe title"];
    render(
      <BrowserRouter>
        <RandomRecipeDetail recipeTitle={testRecipeTitle} />
      </BrowserRouter>
    );
    expect(screen.getByText("View Recipe")).toBeInTheDocument();
  });

  test("should open the modal when the 'View Recipe' button is clicked", async () => {
    const testRecipeTitle = ["Test Recipe title"];
    render(
      <BrowserRouter>
        <RandomRecipeDetail recipeTitle={testRecipeTitle} />
      </BrowserRouter>
    );

    const viewRecipeButton = screen.getByText("View Recipe");
    fireEvent.click(viewRecipeButton);

    await waitFor(() => {
      expect(screen.getByText(testRecipeTitle[0])).toBeInTheDocument();
    });
  });

  test("should close the modal when the 'Close' button is clicked", async () => {
    const testRecipeTitle = ["Test Recipe title"];
    render(
      <BrowserRouter>
        <RandomRecipeDetail recipeTitle={testRecipeTitle} />
      </BrowserRouter>
    );

    const viewRecipeButton = screen.getByText("View Recipe");
    fireEvent.click(viewRecipeButton);

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText(testRecipeTitle[0])).toBeNull();
    });
  });

  test("should render ingredients and instructions when the modal is open", () => {
    const testRecipeTitle = ["Test Recipe title"];

    render(
      <BrowserRouter>
        <RandomRecipeDetail recipeTitle={testRecipeTitle} />
      </BrowserRouter>
    );
    const viewRecipeButton = screen.getByText("View Recipe");
    fireEvent.click(viewRecipeButton);
    expect(screen.getByText("Ingredients:")).toBeInTheDocument();
    expect(screen.getByText("Instructions:")).toBeInTheDocument();
  });
});
