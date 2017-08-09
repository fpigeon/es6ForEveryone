function calculateBill(total, tax = .10, tip = .15) {
  return total + (total * tax) + (total * tip)
}

const totalBill = calculateBill(100)

console.log(totalBill)