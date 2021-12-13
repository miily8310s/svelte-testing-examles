<script lang="ts">
  import type {Todo} from "../../types"
  import TodoDetail from "../Todo/TodoDetail.svelte"
  export let todos: Todo[] = []
</script>

{#if todos.length > 0}
  <ul>
    {#each todos as todo}
      <li>
        <TodoDetail on:handleDone {todo} />
      </li>
    {/each}
  </ul>
{:else}
  <p>All Done!</p>
{/if}