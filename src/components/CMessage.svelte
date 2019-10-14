<script>
  import { formatNumber } from '../utils'
  import loadCategory from '../utils/categories/load-category'

  // props
  export let imc = 0
  export let genre = 'M'

  // component data
  // let category = 'simple'

  // computed data
  $: formatImc = formatNumber(imc)
  $: category = loadCategory(genre, imc)
</script>

<div class="notification">
  <p> Your IMC is {formatImc} and your category is {category} </p>
</div>