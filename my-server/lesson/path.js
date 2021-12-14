const path = require("path");
console.log(path.resolve('app'));
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,"app","aasd","asdrr"))
console.log(path.parse(__filename))