const fs = require("fs");

//Reading data asynchronously
fs.readFile("data.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
    
});
//writiing/creating a file with data
fs.writeFile("greetings.txt","Hi greetings from New file created with .writeFile",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File is created successfully");
    }
});

//Appending data
fs.appendFile("greetings.txt", "\nAdded a new line using .appendFile",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File is updated");
    }
});

//Deleting file
fs.unlink("greetings.txt",(err)=>{
    if (err) {
      console.log(err);
    } else {
      console.log("File is deleted");
    }
})

console.log("This is another operation");