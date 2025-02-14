// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
// Calculate total
let total = (subtotal + (subtotal * taxRate)) - discount;
return `Total invouce: $${total.toFixed(2)}`;
}
console.log(calculateInvoice(100, 0.08, 5)); // Total invouce: $103.00
console.log(calculateInvoice(500, 0.1, 20)); // Total invouce: $530.00
