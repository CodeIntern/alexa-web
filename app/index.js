/*
console.log('hello webpack');
console.log("hello in the browser");

var someClass = function(name, lastName){

    return "hello" + name + lastName;
}

var someObject = new someClass("Jose", "Antonio");
someObject.name = "Jose";
someObject.lastName = "Antonio";

console.log(someObject);
console.log(someClass("Jose", "Antonio"));
*/

//  const someFunc = () => {
//      let innerCount = {
//          count: 3
//      };
//      const innerInc = () => {
//          innerCount.count++;
//      }
//      const innerGet = () => {
//          return innerCount;
//      }
//
//      return {
//          increment: innerInc,
//          getCount: innerGet
//      };
//     //  if(x)
//     //     return innerInc;
//     // else
//     //     return innerShow;
//  }
//
// let aCounter = someFunc();
//
// console.log(aCounter.getCount());
// aCounter.increment();
// console.log(aCounter.getCount());
//
// let theCount = aCounter.getCount();
//
// console.log(aCounter.getCount().count);
// theCount.count++;
// console.log(theCount);
// console.log(aCounter.getCount());

// console.log(aShow());
// console.log(aIncrement());
// console.log(aShow());

function* countIncrementer() {
    let counter = 0;
    while(true) {
        yield counter++;
    }
    // let counter = 0;
    // counter++;
    // yield counter;
}
//
// let countIncrement = countIncrementer();
// console.log(countIncrement.next().value);

// function* letterMaker() {
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }
