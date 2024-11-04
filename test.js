const numbers = [1, 2, 3];

// Adding
const index = numbers.indexOf(2);
[...numbers.slice(0, index), 2, ...numbers.slice(index)];

// Removing
numbers.filter((n) => n !== 2);

// Updating
numbers.map((n) => (n === 2 ? 20 : n));

