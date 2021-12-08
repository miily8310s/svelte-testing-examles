import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Button from "../components/Button.svelte";

test("should fire onclick event", async () => {
  const { container } = render(Button);
  const button = container.querySelector("button");
  await fireEvent.click(button);
  expect(container.textContent).toBe("Add number sum: 10");
});
