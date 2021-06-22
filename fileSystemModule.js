const fs = require("fs");

fs.readFile('file.txt', 'utf-8', (error, data) =>{
    //This will throw error, since file does not exist.
    console.log(error, data)
});

// This will be printed first
// because readFile function will only be complete once every process in that function is done
// works on non-blocking I/O model
console.log("Finised....");

console.log(fs.readFileSync('seconds.js').toString());
console.log("Reading complete")

//same way we have
fs.writeFile("file2.txt", "Some data", () =>{
    console.log("Written to file....");
})

console.log(fs.writeFileSync("file3.txt", "Some more data"));