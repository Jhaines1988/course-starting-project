// typescript Infers  the type of return value.
//

function add (n1: number, n2: number): number {
  return n1 + n2
}
// this has the void return type
// because it doesnt return anything
// you can also have the type of  undefined , it is a valid type in TS
function printResult (num: number): void {
  console.log('Result ' + num)
}

printResult(add(5, 12))

// functions as types:

let combineValues: Function
// combined values2 should take any two values  that are numbers
// and return a number
let combinedValues2: (a: number, b: number) => number

combineValues = add

combinedValues2 = add
console.log(combineValues(8, 8))
// functions and call backs

function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, result => {
  console.log(result)
  // we can still return something here.
  return result
})
