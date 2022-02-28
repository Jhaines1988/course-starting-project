// UNION type.
// what if we want to combine numbers and strings , having a flexible function that can combine both?
function combine (
  input1: number | string,
  input2: number | string,
  // can also check by doing this:
  resultConversion: 'as-number' | 'as-string'
  //   resultConversion: string
) {
  // typescript throws an error here.
  // add runtype if check
  let result
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2
  } else {
    // make it clear to TS that we are always working with one or the other.
    result = input1.toString() + input2.toString()
  }
  // alternative way to implement logic
  //   if (resultConversion === 'as-number') {
  //     return +result
  //   } else {
  //     return result.toString()
  //   }
  return result
}

const combinedAges = combine(30, 26, 'as-string')

console.log(combinedAges)

const combinedNames = combine('Joe', 'Carolyn', 'as-string')
// the extra runtime check  will often be required when using a union type, but not always. It will depend on the logic you are writing
console.log(combinedNames)
// Literal Types
// give more flexibility to the function: resultConversion: string

const combinedAgesStrings = combine('30', '26', 'as-number')

console.log(combinedAgesStrings)
// UnionType
// create aliases
// TYPE ALIAS
type Combinable = number | string
type conversionDescriptor = 'as-number' | 'as-string'
// saves us from writing extra code
function combine2 (
  input1: Combinable,
  input2: Combinable,
  // can also check by doing this:
  resultConversion: conversionDescriptor
  //   resultConversion: string
) {
  // typescript throws an error here.
  // add runtype if check
  let result
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2
  } else {
    // make it clear to TS that we are always working with one or the other.
    result = input1.toString() + input2.toString()
  }
  // alternative way to implement logic
  //   if (resultConversion === 'as-number') {
  //     return +result
  //   } else {
  //     return result.toString()
  //   }
  return result
}

const combineNumsAsStrings = combine2(34, 37, 'as-string')

console.log(combineNumsAsStrings)

/*
Type aliases can be used to "create" your own types.
You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
For example:
*/

// type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 } // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

//For example, you can simplify this code:

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
//To:

type User = { name: string; age: number }

function greet (user: User) {
  console.log('Hi, I am ' + user.name)
}

function isOlder (user: User, checkAge: number) {
  return checkAge > user.age
}

console.log(greet(u1))
