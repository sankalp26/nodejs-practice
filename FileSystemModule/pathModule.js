// -------------------------------
// Reading a file from another folder
// -------------------------------

// Import the File System module to read files
const fs = require("fs");

// Import the Path module to safely work with file paths
// Path helps avoid OS-specific issues (Windows / Linux / Mac)
const path = require("path");

// Create the correct file path by joining folder name and file name
// This ensures the path works on all operating systems
const filePath = path.join("sub-folder", "data2.txt");
console.log(filePath);
// Create an absolute file path starting from the project root / current working directory
// path.resolve() converts the path into a full absolute path
const filePathResolved = path.resolve("sub-folder", "data2.txt");
console.log(filePathResolved);

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const extension = path.extname(filePathResolved);
console.log(extension);