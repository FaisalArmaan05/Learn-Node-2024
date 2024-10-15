const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

// for (let i=1; i<=5; i++) {
//     fs.writeFileSync(dirPath+`/test${i}.text`, "hello this is dummy text file ");
// }
// console.log(dirPath);

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.warn("file name is : ",item)
    });
}
)