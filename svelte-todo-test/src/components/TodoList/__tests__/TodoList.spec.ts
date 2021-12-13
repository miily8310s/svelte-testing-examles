import { render, fireEvent } from "@testing-library/svelte";
import "@testing-library/jest-dom";
import TodoList from "../TodoList.svelte";

describe("TodoList", () => {
  let todos = [
    { id: 1, text: "test 1", done: false },
    { id: 2, text: "test 2", done: true },
  ];
  test("should render TodoList With Todos", () => {
    const { getAllByRole, getByText } = render(TodoList, {
      props: { todos },
    });
    expect(getByText(todos[0].text));
    expect(getByText(todos[1].text));
    expect(getAllByRole("listitem").length).toBe(2);
  });
  test("should show a message When todos are empty", () => {
    const { getByText } = render(TodoList, {
      props: { todos: [] },
    });
    expect(getByText("All Done!"));
  });
});
