const fs = require("fs");
const path = require("path");
console.log("START");
fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("OK");
});
console.log("END");
