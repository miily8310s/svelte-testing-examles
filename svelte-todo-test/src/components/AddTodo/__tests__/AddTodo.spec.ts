import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import AddTodo from "../AddTodo.svelte";

describe("AddTodo", () => {
  test("should render AddTodo", () => {
    const { getByRole } = render(AddTodo);
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("button")).toBeDisabled();
  });
  test("should render AddTodo", async () => {
    const { getByRole, getByPlaceholderText } = render(AddTodo);
    const input = getByPlaceholderText("タスク名をここに追加");
    await fireEvent.change(input, {
      target: { value: "Cooking" },
    });
    // FIXME: disabledのままになってしまうので治す
    expect(getByRole("button")).not.toBeDisabled();
  });
});
