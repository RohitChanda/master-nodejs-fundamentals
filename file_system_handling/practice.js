// const fs = require("fs");

// read -sync
// const dataRead = fs.readFileSync('./data.txt', 'utf-8');
// console.log(dataRead)


// Read file asynchronously with callback
// fs.readFile('./data.txt', 'utf-8',(err,data) => {
//      if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// })

// Reading Files with Promises (Modern Approach)
// Using fs.promises or util.promisify for cleaner async/await syntax:
// const fs = require("fs").promises;

// async function readFileExample() {
//     try {
//     const data = await fs.readFile('myfile.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }

// }

// readFileExample();


// writeFile -->
// const fs = require("fs")
// //Sync way:
// fs.writeFileSync("abcd.txt", "This is own file");

// // Async way:
// fs.writeFile("xyz.txt", "This is own file of mine",(err) => {
//     if(err) throw new Error(err.message);
// })


// Write Files with Promises (Modern Approach)
// const fs = require("fs").promises;
// async function writeFileExample() {
//   try {
//     // Write text to a file
//     await fs.writeFile('myfile.txt', 'Hello, World!', 'utf8');

//     // Write JSON data
//     const data = { name: 'John', age: 30, city: 'New York' };
//     await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

//     console.log('Files created successfully');
//   } catch (err) {
//     console.error('Error writing files:', err);
//   }
// }
// writeFileExample()


// Append file - Using fs.appendFile()
// Appends content to a file, creating the file if it doesn't exist:
// const fs = require('fs').promises;

// async function appendToFile() {
//   try {
//     // Append a timestamped log entry
//     const logEntry = `${new Date().toISOString()}: Application started\n`;
//     await fs.appendFile('app.log', logEntry, 'utf8');

//     console.log('Log entry added');
//   } catch (err) {
//     console.error('Error appending to file:', err);
//   }
// }

// appendToFile();


//Using Streams for Large Files
// For writing large amounts of data, use streams to avoid high memory usage:

const fs = require('fs');
const { pipeline } = require('stream/promises');
const { Readable } = require('stream');

async function writeLargeFile() {
  // Create a readable stream (could be from HTTP request, etc.)
  const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`);
//   const data = Array.fill(100).map((_,i) => `line${i+1} : ${'x'.repeat(100)/n})
  const readable = Readable.from(data);

  // Create a writable stream to a file
  const writable = fs.createWriteStream('large-file.txt');

  try {
    // Pipe the data from readable to writable
    await pipeline(readable, writable);
    console.log('Large file written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

writeLargeFile();
