# master-nodejs-fundamentals
Master Node.js Fundamentals


## Topics
 - [Module System In Node.js](https://github.com/RohitChanda/master-nodejs-fundamentals/edit/main/README.md#module-system-in-nodejs) 

## 🚀 Introduction
### What is Node.js?
- Node.js is an open-source server-side runtime environment built on Chrome's V8 JavaScript engine. 
- It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.

###  What is Node.js Process Model?
- Node.js runs in a single process and the application code runs in a single thread and thereby needs fewer resources than other platforms.
- All the user requests to your web application will be handled by a single thread and all the I/O work or long running job is performed asynchronously for a particular request. So, this single thread doesn't have to wait for the request to complete and is free to handle the next request. When asynchronous I/O work is completed, the request is processed further and the response is sent.

### What are the key features of Node.js?
- Asynchronous and Event driven
- Fast in Code execution
- Single Threaded but Highly Scalable
- Node.js library uses JavaScript
- There is an Active and vibrant community for the Node.js framework
- No Buffering

### Explain the concept of URL module in Node.js
The URL module in Node.js splits up a web address into readable parts. Use require() to include the module. Then parse an address with the ```url.parse()``` method, and it will return a URL object with each part of the address as properties.<br/>
**Example**:
```js
const url = require("url");
const adr = 'http://localhost:8080/default?year=2022&month=september';
const q = url.parse(adr);
console.log(q)
```
**Output** :
```
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: '?year=2022&month=september',
  query: 'year=2022&month=september',
  pathname: '/default',
  path: '/default?year=2022&month=september',
  href: 'http://localhost:8080/default?year=2022&month=september'
}
```
### What are the data types in Node.js?
Like JS, there are two categories of data types in Node: Primitives and Objects.

1. Primitives:
 - String
 - Number
 - BigInt
 - Boolean
 - Undefined
 - Null
 - Symbol

2. Objects:
 - Function
 - Array
 - Buffer





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

## 🚀 Node.js Event loop
In the **browser**, the event loop coordinates the execution of code between the **call stack, web APIs, and the callback queue**.
Node.js, however, implements its own **Node.js event loop** that is different from the regular JavaScript event loop. 
It doesn’t interact with the DOM but does deal with things like input and output (I/O), Database, File System, Network, and others.
![image](https://github.com/user-attachments/assets/b335f081-0023-4518-be80-27c5efd6cd47)

**Single Threaded Event Loop Model Processing Steps:**
* Clients Send request to Web Server.
* Node.js Web Server internally maintains a Limited Thread pool to provide services to the Client Requests.
* Node.js Web Server receives those requests and places them into a Queue. It is known as **Event Queue**.
* Node.js Web Server internally has a Component, known as **Event Loop**. Why it got this name is that it uses indefinite loop to receive requests and process them.
* Event Loop uses Single Thread only. It is main heart of Node.js Platform Processing Model.
* Event Loop checks any Client Request is placed in Event Queue. If no, then wait for incoming requests for indefinitely.
* If yes, then pick up one Client Request from Event Queue
    * Starts process that Client Request
    * If that Client Request Does Not requires any Blocking IO Operations, then process everything, prepare response and send it back to client.
    * If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach
        * Checks Threads availability from Internal Thread Pool
        * Picks up one Thread and assign this Client Request to that thread.
        * That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop
        * Event Loop in turn, sends that Response to the respective Client.

### What is the Event Loop?
- The event loop allows Node to perform **non-blocking I/O operations** even though JavaScript is **single-threaded**.
- It is done by assigning operations to the operating system whenever and wherever possible. 

### Why Event Loop is important?
Most operating systems(like windows, Linux, and mac) are multi-threaded and hence can handle multiple operations executing in the background. When one of these operations is completed, the kernel tells Node.js, and the respective callback assigned to that operation is added to the event queue which will eventually be executed. This will be explained further in detail later in this topic. 

### Features of Event Loop:
- An event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
- The event loop **executes tasks from the event queue** only when the **call stack is empty** i.e. there is no ongoing task.
- The event loop allows us to use callbacks and promises.

### Example
```js
console.log("This is the first statement");
  
setTimeout(function(){
    console.log("This is the second statement");
}, 1000);
  
console.log("This is the third statement");
```
**Output** :
```
This is the first statement
This is the third statement
This is the second statement
```
**Explanation**: In the above example, 
- the first console log statement is pushed to the call stack, and “This is the first statement” is logged on the console, and the task is popped from the stack.
- Next, the setTimeout is pushed to the queue and the task is sent to the Operating system and the timer is set for the task. This task is then popped from the stack.
- Next, the third console log statement is pushed to the call stack, and “This is the third statement” is logged on the console and the task is popped from the stack.
- When the timer set by the setTimeout function (in this case 1000 ms) runs out, the callback is sent to the event queue. The event loop on finding the call stack empty takes the task at the top of the event queue and sends it to the call stack. The callback function for the setTimeout function runs the instruction and “This is the second statement” is logged on the console and the task is popped from the stack.

**Note**: In the above case, if the timeout was set to 0ms then also the statements will be displayed in the same order. This is because although the callback will be immediately sent to the event queue, the event loop won’t send it to the call stack unless the call stack is empty i.e. until the provided input script comes to an end.



### Phases of the Event loop
![image](https://github.com/user-attachments/assets/585147a8-7d21-456a-bae7-cd9421a5629d)
[Check More](https://www.geeksforgeeks.org/node-js-event-loop/#what-is-the-event-loop)

### difference between process.nextTick() and setImmediate()

#### process.nextTick()
The process.nextTick() method adds the callback function to the start of the next event queue. It is to be noted that, at the start of the program process.nextTick() method is called for the first time before the event loop is processed.
Its processed at the start of the event loop and between each phase of the event loop.

#### setImmediate()
The setImmediate() method is used to execute a function right after the current event loop finishes. It is callback function is placed in the check phase of the next event queue.

**Example**
```js
/**
 * setImmediate() and process.nextTick()
 */
setImmediate(() => {
  console.log("1st Immediate");
});

setImmediate(() => {
  console.log("2nd Immediate");
});

process.nextTick(() => {
  console.log("1st Process");
});

process.nextTick(() => {
  console.log("2nd Process");
});

// First event queue ends here
console.log("Program Started");

// Output
Program Started
1st Process
2nd Process
1st Immediate
2nd Immediate
```
- On any given context process.nextTick() has higher priority over setImmediate().
- If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively.
 ```js
let count = 0
const cb = () => {
    console.log(`Processing nextTick cb ${++count}`)
    process.nextTick(cb)
}
setImmediate(() => console.log('setImmediate is called'))
setTimeout(() => console.log('setTimeout executed'), 100)
process.nextTick(cb)
console.log('Start')
 ```
**Output** 
```
Start
Processing nextTick cb 1
Processing nextTick cb 2
Processing nextTick cb 3
Processing nextTick cb 4
Processing nextTick cb 5
Processing nextTick cb 6
Processing nextTick cb 7
Processing nextTick cb 8
Processing nextTick cb 9
Processing nextTick cb 10
...
```
- Unlike process.nextTick(), recursive calls to setImmediate() won't block the event loop, because every recursive call is executed only on the next event loop iteration.



## 🚀 MVC pattern
- MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic. It emphasizes a separation between the software's business logic and display.
- The three parts of the MVC software design pattern can be described as follows:
  - **Model** : Manages data.
  - **View** : Handles layout and display.
  - **Controller** : Request-response handler

## 🚀 Difference b/w a Framework and a Libary
| Framework      | Libary |
| -------------  | ------------- |
|  A framework is a set of pre-written code that provides a structure for developing software applications                                       |  A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasksl  |
|  Framework defines the overall architecture of the application and provides a common set of conventions for building and maintaining the code  |Library is typically smaller in scope than a framework and is intended to be used as a tool to help developers accomplish specific tasks  |
| The framework will tell you where to put your code                                                                                               |    your code calls the code in the library                      | 

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
- We can tell express to use https encrypted channel to exchange cookie data with a secure flag.
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


## What Is NGINX?
- NGINX (pronounced "engine x") is a powerful web server with a non-threaded, event-driven architecture. 
- It is an open-source web server software that can also be used as a **reverse proxy**, load balancer, mail proxy, and HTTP cache.
- It provides HTTPS server capabilities and is mainly designed for maximum performance and stability. It also functions as a proxy server for email communications protocols, such as IMAP, POP3, and SMTP.

### The NGINX Architecture
By implementing event-driven, asynchronous, and non-blocking models, NGINX uses **master-slave architecture**.
- **Workers**: process thousands of requests.
- **Master**:  maintaining the number of configured worker processes.
- **Proxy cache**: They have a cache loader and manager.

### Benefits of NGINX
Using NGINX comes with several benefits, including the following:
- Offers scalability and the ability to handle concurrent requests, It can handle 10,000 concurrent requests. 
- Cache HTTP requests.
- Acts as a robust load balancer.
- Acts as a reverse proxy.
- Acts as an API gateway.
- Serve and cache static files like images and videos, etc.
- Allows on-the-fly upgrades without downtime.
- Handle SSL certificates.

### What is Forward Proxy?
![image](https://github.com/user-attachments/assets/d648b68f-c150-46ba-b580-5185df67c63f)
- A forward proxy, also referred to as a “proxy server,” or simply a “proxy,” is a server that sits in front of one or more client computers and serves as a middleman between the clients and the internet.
- The forward proxy receives the request before sending it from the client machine to the internet resource. On behalf of the client machine.
- The forward proxy then sends the request to the internet and returns the response.
- Multiple clients and one server.

### What is Reverse Proxy?
![image](https://github.com/user-attachments/assets/6087fda0-2980-445c-bcba-3b8a1cf8fb1d)
![image](https://github.com/user-attachments/assets/043f7bfd-e502-4d50-a4e6-371ec4978269)

- A reverse proxy is a server, app, or cloud service that acts as an intermediary between a client and one or more web servers.
- A reverse proxy is a server that sits in front of web servers and forwards client requests to those web servers.
- Reverse proxies are typically implemented to help increase security, performance, and reliability.



