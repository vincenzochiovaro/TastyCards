import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import CategoriesNav from "../components/CategoriesNav";

afterEach(() => {
  cleanup();
});

describe("CategoriesNav", () => {
  test("renders without error", async () => {
    render(
      <BrowserRouter>
        <CategoriesNav />
      </BrowserRouter>
    );

    await waitFor(async () => {
      const categoryListElements = await screen.findAllByTestId("categoryList");
      expect(categoryListElements).toHaveLength(4);
    });
  });
});
