const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');

const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'this is simple text file');
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })
// fs.appendFile(filePath, ' for fruits.', (err) => {
//     if (!err) console.log('file is updated successfully');
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) console.log('file is renamed successfully');
// });

fs.unlinkSync(`${dirPath}/fruit.txt`);