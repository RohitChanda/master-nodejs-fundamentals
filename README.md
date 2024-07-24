# master-nodejs-fundamentals
Master Node.js fundamentals


## Topics
 - [Module System In Node.js](https://github.com/RohitChanda/master-nodejs-fundamentals/edit/main/README.md#module-system-in-nodejs) 



## 🚀 Module System in Nodejs
In simple terms, a module is a piece of reusable JavaScript code. It could be a .js file or a directory containing .js files. You can export the content of these files and use them in other files.
Modules help developers adhere to the DRY (Don't Repeat Yourself) principle in programming. 
Types of Modules: 
Built-in modules
Local modules
Third-party modules


### Built-in Modules:
- http, url, path, fs, os, crypto, cluster, etc
- Check more - https://www.w3schools.com/nodejs/ref_modules.asp

### Local modules:
- local modules are created locally in your Node.js application.
- Create a calculate.js file
  ```js
  function sum(a, b) {
    return a + b;
  }

  module.exports = {
    sum
  }
  ```
- Load the module in index.js file using require method

### Third-Party Modules
- A cool thing about using modules in Node.js is that you can share them with others. The Node Package Manager (NPM) makes that possible. When you install Node.js, NPM comes along with it.
Install a package using the command: npm install <name-of-package>


Node.js supports two module systems for organizing and sharing code. These are
- CommonJS modules
- ECMAScript modules


## 🚀 MVC pattern
- MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display.
- The three parts of the MVC software design pattern can be described as follows:
  - **Model** : Manages data.
  - **View** : Handles layout and display.
  - **Controller** : Request-response handler

## 🚀 Handle Cookies In Node.js
Cookies are small data that are stored on a client side and sent to the client along with server requests. Cookies have various functionality, they can be used for maintaining sessions and adding user-specific features in your web app. For this, we will use **cookie-parser** module of npm which provides middleware for parsing of cookies.

### Use as a middleware
```js
const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

// adding cookieParser to middleware stack

app.use(cookieParser());
```

### Set Cookie
``` res.cookie(name_of_cookie, value_of_cookie); ```
```js
// expire time in milliseconds
res.cookie('my_cookie', 'cookie_value',  {expire : 24 * 60 * 60 * 1000 });
```
- We can also set cookie only over HttpOnly.This flag tells the browsers to not allow client-side script access to the Cookie.
  ```js
  res.cookie('my_cookie' , 'cookie_value', { HttpOnly: true});
  ```
- We can tell express to use https encrypted channel to exchange cookie data with secure flag.
  ```js
  res.cookie('my_cookie , 'cookie_value', { secure: true});
  ```

### Read Cookies
We can access Cookies via request object, ```req.cookies```.

### Delete Cookie
 ```js
res.clearCookie('my_cookie');
```

## 🚀 Cluster in Node
Clusters of Node.js processes can be used to run **multiple instances** of Node.js that can distribute workloads among their application threads.

To fully utilize the potential of **multi-core systems** and enhance the performance of Node.js applications, we can implement clustering using the built-in cluster module. Clustering allows us to create **multiple worker processes** to handle incoming requests, resulting in improved performance and better utilization of system resources.

### Understanding Clustering
- Clustering in Node.js involves creating **multiple worker processes** that share the incoming workload. 
- Each worker process runs in its own event loop, utilizing the available CPU cores.
- The **master process** manages the worker processes, distributes incoming requests, and handles process failures.
- All Worker Process Share the same port

### Benefits of Clustering:
- **Improved Performance:** Clustering enables parallel processing of requests across multiple cores, leading to improved performance
- **Scalability:** Clustering enhances the scalability of Node.js applications by **handling concurrent requests in parallel**. As the workload increases, additional worker processes can be created dynamically to distribute the load effectively.
- **Fault Tolerance:** If a worker process crashes or becomes unresponsive, the master process can detect the failure and restart the worker process automatically. This fault tolerance ensures that the application remains available even in the presence of process failures.

```js
const cluster = require("cluster");
const express = require("express");
const os = require("os");

const numCpu = os.cpus().length;
// const numCpu = os.availableParallelism(); //both are same

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  console.log(numCpu);
  for (let i = 0; i < 1e8; i++) {}
  res.send("Hello from Node");
  cluster.worker.kill(); // kill a worker
});

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  //create child worker process based on cpus
  for (let i = 0; i < numCpu; i++) {
    cluster.fork(); // create worker
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  app.listen(port, () => {
    console.log(`Example app ${process.pid} - listening http://127.0.0.1:${port}`);
  });
}


```
- When any of the workers die the cluster module will emit the 'exit' event.
- To kill a worker use the kill method
  ```js
  cluster.worker.kill();
  ```

## 🚀 PM2
PM2 is a production-grade process manager for Node.js applications that allows you to keep applications alive forever, reload them without downtime, and facilitate common system admin tasks. It provides features such as:
- Easy process management
- Auto-restart on crashes
- Log management
- Application monitoring

### install pm2 globally
```
npm install -g pm2
```

### pm2 commands
- **Starting Your Application with PM2**
  ```
  pm2 start src/index.js
  ```
- **Stopping a Process**
  ```
  pm2 stop <process_name>
  ```
- **Re-staring a Process**
  ```
  pm2 restart <process_name>
  ```
- **Deleting a process**
  ```
  pm2 delete <process_name>
  ```
- **Monitoring Your Application**
  ```
  pm2 monit
  ```
- [check more](https://medium.com/@ayushnandanwar003/deploying-node-js-applications-using-pm2-a-detailed-guide-b8b6d55dfc88)

## Node.js Stream
Streams are objects that let you read data from a source or write data to a destination in **continuous fashion**. There are four types of streams.
- **Writable**: streams to which data can be written.
- **Readable**: streams from which data can be read.
- **Duplex**: streams that are both Readable and Writable.
- **Transform**: Duplex streams that can modify or transform the data as it is written and read.

Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −
- **data**: This event is fired when there is data is available to read.
- **end**: This event is fired when there is no more data to read.
- **error**: This event is fired when there is any error receiving or writing data.
- **finish**: This event is fired when all the data has been flushed to underlying system.

### Readable Stream
```js
app.get("/data", (req, res) => {
  const readerStream = fs.createReadStream("./sample.txt", "utf-8");
  readerStream.on("data", (chunk) => {
    res.write(chunk);
  });
  readerStream.on("end", () => res.end()); //This event is fired when there is no more data to read
  readerStream.on("error", function (err) {
    console.log(err.stack);
  });
});
```

### Writable Stream
```js
const fs = require("fs");
const data = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s;

// Create a writable stream
const writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
```
- Stream added a header property **Transfer-Encoding: chunked** in response header.

### Piping the Streams:
Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.
```js
const fs = require("fs");

// Create a readable stream
const readerStream = fs.createReadStream('input.txt');

// Create a writable stream
const writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
```
### Chaining the Streams:
Chaining is a mechanism to connect the output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.
```js
const fs = require("fs");
const zlib = require('zlib');

// fs read stream --(pipe)--> zip --(pipe)-> fs write stream
// so when the file is reading ,in that time we will automatically converted into zip and write into another file
fs.createReadStream("./sample.txt").pipe(
  zlib.createGzip().pipe(fs.createWriteStream("./destination.txt"))
);
  
console.log("File Compressed.");
```
