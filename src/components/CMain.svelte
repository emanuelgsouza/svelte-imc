<script>
  import CInput from './CInput.svelte'
  import CMessage from './CMessage.svelte'
  import CRadioGroup from './CRadioGroup.svelte'
  import { calculateImc } from '../utils'

  // component data
  let imc = 0
  let height = 0
  let weight = 0
  let genre = 'M'

  // component methods
  const setHeight = ({ detail }) => {
    height = detail
  }

  const setWeight = ({ detail }) => {
    weight = detail
  }

  const handleClick = () => {
    imc = calculateImc(weight, height)
  }

  const setGenre = ({ detail }) => {
    genre = detail
  }
</script>

<main class="section">
  <CRadioGroup
    label="Select the genre"
    on:value={setGenre}
  />

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

    <CMessage {imc} {genre} />
  {/if}
</main>