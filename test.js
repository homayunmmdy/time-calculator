const person = {
  name: "john",
  address: {
    country: "USA",
    citry: "San Francisco",
  },
};

const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Homayoun",
};
console.log(updated);
