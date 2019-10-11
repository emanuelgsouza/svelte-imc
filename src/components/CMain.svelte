<script>
  import CInput from './CInput.svelte'
  import CMessage from './CMessage.svelte'

  let imc = 0
</script>

<main class="section">
  <CInput
    id="weight"
    placeholder="Weight"
  />

  <CInput
    id="height"
    placeholder="Height"
  />

  <button class="button is-info"> Compute </button>

  <!-- conditionals -->
  {#if imc > 0}
    <hr />

    <CMessage />
  {/if}
</main>