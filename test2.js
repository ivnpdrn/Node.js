var fs = require("fs");

// var data = fs.readFileSync("file1.txt", {encoding : "utf-8"});

console.log("File content:");

fs.readFile("file1.txt", { encoding : "utf-8"},

function(error, data) {

    console.log(data);

});

console.log("The readFile () method was called")

