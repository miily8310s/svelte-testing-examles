import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import TodoDetail from "../TodoDetail.svelte";

describe("TodoDetail", () => {
  const checkedTodo = { id: 1, text: "test 1", done: true };
  const nonCheckedTodo = { id: 2, text: "test 2", done: false };

  test("should render TodoList With Todos", () => {
    const { getByText, getByLabelText } = render(TodoDetail, {
      props: { todo: checkedTodo },
    });
    expect(getByLabelText("DoneCheck")).toBeChecked();
    expect(getByText(checkedTodo.text));
  });
  test("should show a message When todos are empty", () => {
    const { getByText, getByLabelText } = render(TodoDetail, {
      props: { todo: nonCheckedTodo },
    });
    expect(getByLabelText("DoneCheck")).not.toBeChecked();
    expect(getByText(nonCheckedTodo.text));
  });
});
