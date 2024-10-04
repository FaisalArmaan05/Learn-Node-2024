// kuch basic features hotty hain jo har programming language hmy provide krti ha like console.log, HTTPS, fs, Buffer etc

// two type of core modules. global and none global. wo modules jin ko hmy import nahi krna parta apny project ya file main un ko global modules kehty hain like console.log etc. or wo modules jin ko use krny k liye hmy import krna parta ha wo none global modules hain like file system mean fs etc.
const fs = require('fs');
console.log(__filename, __dirname);

fs.writeFileSync("code.txt","hello world");
