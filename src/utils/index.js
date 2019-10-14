import numeral from 'numeral'
import lte from 'lodash/lte'

/**
 * @method formatNumber
 * @param  {Number} num
 * @return {String}
 */
export const formatNumber = num => numeral(num).format('0,0.00')

/**
 * @method imcCalc
 * @param  {Number} heigth
 * @param  {Number} weight
 * @return {Number}
 */
export const calculateImc = (weight, heigth) => {
  if (lte(weight, 0) || lte(heigth, 0)) {
    return 0
  }
  const result = weight / Math.pow(heigth, 2)
  return result.toFixed(2)
}