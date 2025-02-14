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

    // Task 3
    const calculateLoyaltyDiscount = (amount, years) => {
        let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.1 : 0.05;
        let discountPrice = amount - (amount * discountRate);
        return `Discounted price: $${discountPrice.toFixed(2)}`;
    };
  
    //Test cases
console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"

// Task 4
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    return `Shipping cost: $${baseCost.toFixed(2)}`;
    }

//Test cases
console.log(calculateShippingCost(10, "USA", true)); // Expected output: "Shipping cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected output: "Shipping cost: $13.50"
