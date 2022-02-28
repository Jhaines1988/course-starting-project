const person: {
  name: string
  age: number
  hobbies: string[]
  // Tuple type- tells TS we have exactly two elements, one is a number one is a string
  // length is enforced if we assign it manually, however array.push is an exception!
  // ex person.role.push('admin') will not throw error, but person.role[2] = 'admin' will**
  role: [number, string]
} = {
  name: 'Joe',
  age: 34,
  hobbies: ['Guitar', 'weight-lifting', 'Brazilian JJ'],
  role: [3, 'Developer']
}

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // cannot use array methods however, since we have
  // explicitly told typescript that the array is full of strings only
}

// Enums
// will assign numbers at default, starting at 0.
// if you start it at a different number, it will increment from there
// you can also use strings.
enum Password {
  ILOVEDOGS,
  BANANA,
  FIREHOSE
}

const user = {
  name: 'Baloo',
  password: Password.ILOVEDOGS
}

if (user.password === Password.ILOVEDOGS) {
  console.log(user.name)
}

// "Any" type :
// Avoid using this whenever possible. It takes away all the advantages of typescript.
// TS can no longer 'check' types of values, because we tell it the value can be anything.
// use ANY if you cannot know what kind of data you are working with.
