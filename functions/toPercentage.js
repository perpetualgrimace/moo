export default function toPercentage(str) {
  if (str) {
    const decimal = (str * 100).toFixed(1);

    if (decimal - Math.floor(decimal) !== 0) {
      return `${decimal}%`;
    } else {
      return `${decimal.split(".")[0]}%`;
    }
  }
  return "missing `str` in `toDecimal()`";
}
