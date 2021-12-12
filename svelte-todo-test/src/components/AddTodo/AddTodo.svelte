<script lang="ts">
  import {createEventDispatcher} from "svelte"
  const dispatch = createEventDispatcher()
  let todoText = ''
</script>

<form on:submit|preventDefault>
  <input type="text" name="todo-text" placeholder="タスク名をここに追加" data-testid="input-element" bind:value={todoText}>
  <button disabled={!todoText} on:click={() => dispatch("addTodo", todoText)}>タスクを追加する</button>
</form>