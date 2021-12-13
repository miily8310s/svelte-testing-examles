<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import type { Todo } from "../../types";
  export let todo: Todo
  const dispatch = createEventDispatcher()
</script>

<div>
  <input type="checkbox" checked={todo.done} aria-label="DoneCheck" on:click={() => dispatch("handleDone", todo)}>
  <span>{todo.text}</span>
</div>