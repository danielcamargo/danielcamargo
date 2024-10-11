

// Multiply 2 numbers without using the * operator
function multiplication(a, b) {
    // if any number is zero, I am returning zero
    if (a === 0 || b === 0) {
        return 0;
    }
    
    // if any number is 1, I am returning the other number
    if (a === 1) {
        return b;
    }
    
    if (b === 1) {
        return a;
    }
    
    // If both numbers are negative, I need to make them positive
    
    
    
}

// Test cases
// multiplication(2, 3); // 6
console.log(multiplication(0, 3)); // 0
console.log(multiplication(2, 0)); // 0
console.log(multiplication(1, 3)); // 3
console.log(multiplication(2, 1)); // 2
