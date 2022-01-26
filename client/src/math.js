const calculate = (total, percent) => {
  const tip = (total * percent)
  return tip + total
}

module.exports = {
  calculate
}
