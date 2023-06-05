import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import RandomRecipe from "../components/RandomRecipe";

afterEach(() => {
  cleanup();
});

describe("RandomRecipe", () => {
  test("renders decision title", async () => {
    render(
      <BrowserRouter>
        <RandomRecipe />
      </BrowserRouter>
    );

    const decisionTitle = await screen.findByTestId("decisionTitle");
    expect(decisionTitle).toBeInTheDocument();
  });
  test("renders Generate button", () => {
    render(
      <BrowserRouter>
        <RandomRecipe />
      </BrowserRouter>
    );
    const generateButton = screen.getByText("Generate");
    expect(generateButton).toBeInTheDocument();
  });
});
