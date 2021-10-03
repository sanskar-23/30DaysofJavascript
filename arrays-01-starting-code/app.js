// // // const numbers = [1,2,3];
// // // console.log(numbers);
// // //
// // // // const moreNumbers = Array('Hi', 'Welcome');
// // // // console.log(moreNumbers);
// // // //
// // // // const yetMoreNumbers = Array.of(1,2,3,4);
// // // // console.log(yetMoreNumbers);
// // //
// // // const list = document.querySelectorAll('li');
// // // console.log(list);
// // //
// // // const moreNumbers = Array.from(list);
// // // console.log(moreNumbers);
// // //
// // // const hobbies = ['cooking', 'cricket', 'sex'];
// // // const personalData = ['20', '30', '40'];
// // //
// // // const analytics = [[1,2,3], [4,5,6], [7,8,9]];
// // //
// // // for(const data of analytics) {
// // //   console.log(data);
// // // }
// // //
// // // console.log(hobbies[1]);
// //
// //
// // const hobbies = ['sports', 'cooking', 'singing'];
// // hobbies.push('reading');
// // hobbies.unshift('coading');
// // hobbies.pop();
// // console.log(hobbies);
// //
// // hobbies[1] = 'sanskar';
// // console.log(hobbies);
// //
// // hobbies.splice(1,0, 'Good food');
// // console.log(hobbies);
// //
// // hobbies.splice(-1,1);
// // console.log(hobbies);
//
//
// const testResults = [1,5.3,1.5,10.99,-5,10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([89,90,91]);
// testResults.push(69);
//
// console.log(testResults, storedResults);
// console.log(testResults.indexOf(-5));
//
// const personDetails = [{name: 'sanskar'}, {college: 'TIET'}];
// console.log(personDetails.indexOf({name: 'sanskar'}));
//
// const manuel = personDetails.find( (person, idx, persons) => {
//   return person.name === 'sanskar';
// });
//
// manuel.name = 'sam';
//
// console.log(manuel);
//
// const maxIndex = personDetails.findIndex((person, idx, persons) => {
//   return person.name === 'sam';
// });
// console.log(maxIndex);
//
// console.log(testResults.includes(1.5));


const prices = [10,20,30,40,50];
const tax = 0.19;

  const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceobj = {index: idx, taxAdjustedPrices: price * (1 + tax)};
  return priceobj;
});

console.log(prices, taxAdjustedPrices);
