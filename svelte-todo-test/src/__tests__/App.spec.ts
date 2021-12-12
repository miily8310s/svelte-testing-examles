import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import App from "../App.svelte";

test("should render App component", () => {
  const { getByRole } = render(App, {
    props: {
      name: "Test",
    },
  });
  expect(getByRole("heading").textContent).toBe("Hello Test!");
});
