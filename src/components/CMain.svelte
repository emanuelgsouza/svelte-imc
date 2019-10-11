<script>
  import CInput from './CInput.svelte'
  import CMessage from './CMessage.svelte'
  import { formatNumber } from '../utils'

  let imc = 0
  let height = 0
  let weight = 0

  const setHeight = ({ detail }) => {
    height = detail
  }

  const setWeight = ({ detail }) => {
    weight = detail
  }

  const handleClick = () => {
    imc = weight / (height * height)
  }
</script>

<main class="section">
  <CInput
    id="weight"
    label="Weight"
    placeholder="Weight"
    on:value={setWeight}
  />

  <CInput
    id="height"
    label="Height"
    placeholder="Height"
    on:value={setHeight}
  />

  <button class="button is-info" on:click={handleClick}> Compute </button>

  <!-- conditionals -->
  {#if imc > 0}
    <hr />

    <CMessage {imc} />
  {/if}
</main>