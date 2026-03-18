const fs = require("fs");

//to read file content using blocking code
console.log("Starting to read");
const buffer = fs.readFileSync("data.txt", { encoding: "utf-8" });
console.log(buffer);

//to create a file / writing anything on a created file. To catch any error better to wrap it in try-catch block
try {
  fs.writeFileSync("rules.txt", "This is a newly created file");
} catch (err) {
  console.log(err);
}

console.log(fs.readFileSync("rules.txt", { encoding: "utf-8" }));

//Adding data to an existing file(appending)
fs.appendFileSync("rules.txt", "\nThis text is added using appendFileSync()");
console.log(fs.readFileSync("rules.txt", { encoding: "utf-8" }));


//Deleting a file
fs.unlinkSync("rules.txt");
console.log("File is deleted");

console.log("This is another operation being performed");
