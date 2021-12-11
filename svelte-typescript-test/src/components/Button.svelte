<script lang="ts">
  let numbers = [0, 1, 2, 3]
  const addNumber = () => {
    numbers = [...numbers, numbers.length]
  }
  $: sum = numbers.reduce((previous, current) => previous + current, 0)
</script>

<button on:click={addNumber}>
  Add number
</button>

<p>sum: {sum}</p>