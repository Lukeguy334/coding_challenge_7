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

// Task 5
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

//Test cases
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"

// Task 6
let transactions = [500, 1200, 3000, 800, 2200];
const filterHighValueTransactions = (transactions, filterFunction) => transactions.filter(filterFunction);

//Test cases
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]

//Task 7
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current balance: $${balance}`;
    };
}
       
//Test cases
let budget = createBudgetTracker();
console.log(budget(300)); // Expected output: "Current balance: $-300" 
console.log(budget(200)); // Expected output: "Current balance: $-500"

// Task 8
function calculateGrowth(years, revenue) {
if (years === 0 || years >= 10) {
    return `Projected Revenue: $${revenue.toFixed(2)}`;
}
return calculateGrowth(years - 1, revenue * 1.05);
}
//Test cases
console.log(calculateGrowth(8, 1000)); // Expected output: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5, 5000)); // Expected output: "Projected Revenue: $6381.41"
