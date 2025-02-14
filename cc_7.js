// Task 1
function calculateInvoice(subtotal, taxRate, discount) {
// Calculate total
let total = (subtotal + (subtotal * taxRate)) - discount;
return `Total invouce: $${total.toFixed(2)}`;
}
console.log(calculateInvoice(100, 0.08, 5)); // Total invouce: $103.00
console.log(calculateInvoice(500, 0.1, 20)); // Total invouce: $530.00

// Task 2
const calculateHourlyWage = function(salary, hoursPerWeek) {
    //Calculate hourly wage
    let hourlyWage = salary / (hoursPerWeek *52);
    return `Hourly wage: $${hourlyWage.toFixed(2)}`;
};
    //Test cases
    console.log(calculateHourlyWage(52000, 40)); // Hourly wage: $25.00
    console.log(calculateHourlyWage(75000, 35)); // Hourly wage: $41.21
