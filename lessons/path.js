const path = require("path");

console.log(path.join("first", "second", "third"));
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, ".."));
const fullpath = path.resolve(__dirname, "first", "second", "third.js");
console.log(path.parse(fullpath));

const siteURL = "http://localhost:8080/users?id=5123";
const url = new URL(siteURL);
console.log(url);
