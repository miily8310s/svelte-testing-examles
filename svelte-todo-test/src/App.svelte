<script lang="ts">
  import AddTodo from "./components/AddTodo/AddTodo.svelte";
	import TodoList from "./components/TodoList/TodoList.svelte";
  import type { Todo } from "./types";
	
	let todos = [
		{id: 1, text: "Read book", done: true},
		{id: 2, text: "Study English Vocabulary", done: false},
		{id: 3, text: "Create Svelte App", done: false}
	]
	$: unDoneTodosCount = todos.filter(todo => !!todo.done).length
	$: status = `${todos.length}タスク中${unDoneTodosCount}タスク完了`

	const addNewTodo = (event: {detail: string}) => {
		let text = event.detail
		todos = [...todos, {id: todos.length, text, done: false}]
	}
	const handleDone = (event: {detail: Todo}) => {
		const todo = event.detail
		const { id } = todo
		todos = todos.map(t => t.id == id ? {...t, done: !t.done} : t)
	}
</script>

<main>
	<h1>My Todos</h1>
	<AddTodo on:addTodo={addNewTodo}/>
	<h2>{status}</h2>
	<TodoList todos={todos} on:handleDone={handleDone}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>