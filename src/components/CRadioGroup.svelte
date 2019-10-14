<script>
  // to dispacth a event
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  import { GENRES, MALE } from '../utils/categories/genres'

  let genres = Object.values(GENRES)
  let genre = MALE

  export let label

  const handleChange = event => {
    const value = event.target.value

    dispatch('value', value)
  }
</script>

<div class="field">
  <label class="label">{label}</label>
  <div class="control">
    {#each genres as { label, value }, i}
      <label class="radio">
        <input
          bind:group={genre}
          type="radio"
          name={label}
          value={value}
          on:change={handleChange}>
        {label}
      </label>
    {/each}
  </div>
</div>