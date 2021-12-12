<script lang="ts">
  import type {Todo} from "../types"
  export let todos: Todo[] = []
</script>

{#if todos.length > 0}
  <ul>
    {#each todos as todo}
      <li>
        <p>{todo.id}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>All Done!</p>
{/if}