<script>
  // to dispacth a event
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  // use export to declare component props
  export let label
  export let placeholder
  export let id
  export let type = 'text'

  let value = null

  const handleChange = event => {
    const innerValue = event.target.value
    value = innerValue

    dispatch('value', Number(innerValue))
  }
</script>

<div class="field">
  <label class="label" for={id}>{label}</label>
  <div class="control">
    <input
      class="input is-primary"
      type="number"
      min={1}
      {id}
      {placeholder}
      {value}
      on:change={handleChange}
    />
  </div>
</div>