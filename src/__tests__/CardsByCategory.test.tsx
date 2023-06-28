import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import CardsByCategory from "../components/CardsByCategory";

afterEach(() => {
  cleanup();
});

describe("CardsByCategory", () => {
  test("Should render loading state initially", () => {
    render(
      <BrowserRouter>
        <CardsByCategory />
      </BrowserRouter>
    );

    const loadingText = screen.getByText("Loading . . .");
    expect(loadingText).toBeInTheDocument();
  });
});
