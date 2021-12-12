<script lang="ts">
	import TodoList from "./components/TodoList.svelte";
	let todos = [
		{id: 1, text: "Read book", done: true},
		{id: 2, text: "Study English Vocabulary", done: false},
		{id: 3, text: "Create Svelte App", done: false}
	]
	$: unDoneTodosCount = todos.filter(todo => !!todo.done).length
	$: status = `${todos.length}タスク中${unDoneTodosCount}タスク完了`
</script>

<main>
	<h1>My Todos</h1>
	<h2>{status}</h2>
	<TodoList todos={todos}/>
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