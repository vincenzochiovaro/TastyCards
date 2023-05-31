import "@testing-library/jest-dom";
import Header from "../components/Header";
import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Header", () => {
  test("Renders header-brand and sign-in correctly ", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Tasty Cards")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
