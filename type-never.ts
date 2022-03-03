// type unknown

let userInput: unknown

userInput = 5
userInput = 'Joe'

// so far, this is the same as not defining a type.

// however, this will not work

let userName: string

// userName = userInput

// we can add a check though:

if (typeof userInput === 'string') {
  userName = userInput
}

// Never type:

// never is a type that functions can return:

function generateError (message: string, code: number): never {
  throw { mesage: message, errorCode: code }
}

generateError('An Error Occured!', 500)

// this function returns : NEVER. It never returns a value.  The error being thrown " cancels" our script
//  The infered type is "void". You can however, explicity set "never" as the return type, as seen above.
// an infinite loop would also be the type of "Never"
