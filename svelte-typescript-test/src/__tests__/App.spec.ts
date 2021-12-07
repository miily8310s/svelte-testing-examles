import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import App from "../App.svelte";

test("should render App component", () => {
  const { getByRole } = render(App, {
    name: "test!!!",
  });
  expect(getByRole("heading").textContent).toBe("Hello test!!!!");
});
