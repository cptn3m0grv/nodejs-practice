const path = require("path");

console.log(path.basename('C:\\temp\\'));
console.log(path.dirname("C:\\temp\\"));
console.log(__filename+"\n"+path.extname(__filename));