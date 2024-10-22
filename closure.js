function createCounter() {
    let count = 0; // `count` is in the closure

    return function() {
        count++; // Inner function accesses and modifies `count`
        return count;
    };
}

const counter1 = createCounter(); // `counter1` is now a closure
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

const counter2 = createCounter(); // A new closure is created
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2
