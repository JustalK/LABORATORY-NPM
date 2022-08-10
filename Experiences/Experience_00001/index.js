const minimatch = require("minimatch")

// The two next dependencies are called phantom dependencies
// If we look in the package.json, they are not listed
// I can use it because Npm flatten the dependencies and those two packages are dependencies of minimatch
const expand = require('brace-expansion')
const balanced = require('balanced-match')

console.log(minimatch("bar.foo", "*.foo"))

// Using a phantom dependencies as if it was declared in the package.json
console.log(expand('file-{a,b,c}.jpg'))
console.log(balanced('{', '}', 'pre{in{nested}}post'))