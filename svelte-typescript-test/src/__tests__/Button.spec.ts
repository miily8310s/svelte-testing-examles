import { fireEvent } from "@testing-library/dom";
import "@testing-library/jest-dom";
import { render } from "@testing-library/svelte";
import Button from "../components/Button.svelte";

test("should fire onclick event", async () => {
  const { getByText } = render(Button);
  const button = getByText("Add number");
  const printSum = getByText("sum: 6");
  await fireEvent.click(button);
  expect(printSum.textContent).toBe("sum: 10");
  await fireEvent.click(button);
  expect(printSum.textContent).toBe("sum: 15");
});
