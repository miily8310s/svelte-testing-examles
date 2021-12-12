import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import App from "../App.svelte";

test("should render App component", () => {
  const { getByText } = render(App);
  expect(getByText("3タスク中1タスク完了")).not.toBeNull();
});
