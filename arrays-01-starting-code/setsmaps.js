// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if(ids.has('Hi')) {
//  ids.delete('Hi');
// }
//
// for(const entry of ids.entries()) {
//   console.log(entry[0]);
// }
//
// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};
//
// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
//
// personData.set(person2, [{date: 'Two weeks ago', price: 50}]);
//
// console.log(personData);
// console.log(personData.get(person1));
//
//
// for(const [key, value] of personData) {
//   console.log(key, value);
// }
//
// for(const key of personData.keys()) {
//   console.log(key);
// }
//
//
// for(const value of personData.values()) {
//   console.log(value);
// }
//
// console.log(personData.size)


let person = {name: 'Max'};
const persons = new WeakSet();
persons.add(person);

// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'some imp info!');

person = null;

console.log(personData);
