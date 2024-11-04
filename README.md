## Function as First Class Citizen
In javascript 
- we can assign function into variable
- we can pass it as an argument
- we can also return function into another function

## Higher Order Functions
higher order function is function that takes the 
- funtion as an argument 
- or return the function

## Function Compositions
a powerful technique that allows developers to combine multiple functions into a single function

```javascript
let input = " JavaScript ";
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`
const toLowerCase = str => str.toLowerCase()

const result = wrapInDiv(toLowerCase(trim(input)))
```

## Composing and Piping
```javascript
import { pipe } from "lodash/fp";

let input = " JavaScript ";
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDiv);

transform(input);

```

## Currying
transforms a function with multiple arguments into a nested series of functions, each taking a single argument

```javascript
import { pipe } from "lodash/fp";

let input = " JavaScript ";
const trim = (str) => str.trim();
// const wrapInDiv = (str) => `<div>${str}</div>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("dev"));

console.log(transform(input));

```