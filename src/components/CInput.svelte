<script>
  // use export to declare component props
  export let placeholder
  export let id
  export let type = 'text'
</script>

<div class="field">
  <label class="label" for={id}>{placeholder}</label>
  <div class="control">
    <input
      class="input is-primary"
      type="number"
      min={1}
      {id}
      {placeholder}
    />
  </div>
</div>