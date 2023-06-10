// You should aready know:
// HTNL, CSS, and Javascript
// possibly expirience with other libraries and Frameworks

// How NodeJS differs from vanilla JS
// 1) Node runs on a server - not in a browser (backend not front end)
// 2) The console is the terminal window
console.log('Hello world')

// 3) global object instead of window object
//console.log(global);
// 4) Has Common Core modules that will explore
// 5) Common JS modules instead of ES6 modules

const os = require('os')
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname);
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
