# master-nodejs-fundamentals
Master Node.js Fundamentals
## Related Interview Topics
- [Node.js Interview Questions](https://github.com/Mohamed-Hashem/nodejs-interview-questions/blob/master/README.md#-3-nodejs-data-types)

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
- Asynchronous and Event-driven
- Fast in Code execution
- **NPM:** A vast package ecosystem simplifies module management and deployment.
- Single Threaded but Highly Scalable
- **Full-Stack JavaScript:** Allows for unified server and client-side code in JavaScript.
- There is an Active and vibrant community for the Node.js framework
- No Buffering

### What are the use cases of Nodejs?
**1. Data Streaming:** Suited for real-time streaming of audio, video, and lightweight data.

**2. API Servers:** Ideal for building fast, scalable, and data-intensive applications.

**3. Microservices:** Its module-oriented design facilitates the development of decoupled, independently scalable services.

**4. Single Page Applications:** Often used with frameworks like Angular, React, or Vue to craft robust, server-side backends.

**5. Chat Applications:** Its real-time capabilities are advantageous in building instant messaging systems.

**6. Internet of Things (IoT):** Provides a lightweight environment for running applications on constrained devices like Raspberry Pi.


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

#### String data type
Strings in Node.js are sequences of unicode characters. Strings can be wrapped in a single or double quotation marks.
Javascript provide many functions to operate on string, like indexOf(), split(), substr(), length.

**String functions:**
|Function   | Description               |
|-----------|---------------------------|
|charAt()   |It is useful to find a specific character present in a string.|
|Concat()   |It is useful to concat more than one string.|
|indexOf()  |It is useful to get the index of a specified character or a part of the string.|
|Match()    |It is useful to match multiple strings.|
|Split()    |It is useful to split the string and return an array of string.|
|Join()     |It is useful to join the array of strings and those are separated by comma (,) operator.|

**Example:**

```js
/** 
 * String Data Type
 */
const str1 = "Hello";
const str2 = 'World';
console.log("Concat Using Function :" , (str1.concat(str2)));
```


####  Number data type
The number data type in Node.js is 64 bits floating point number both positive and negative. The parseInt() and parseFloat() functions are used to convert to number, if it fails to convert into a number then it returns `NaN`.

#### BigInt data type
A BigInt value, also sometimes just called a BigInt, is a bigint primitive.
Its created by appending n to the end of an integer literal, or by calling the BigInt() function ( without the new operator ) and giving it an integer value or string value

```js

const num1 = 99n; //This is a BigInt
console.log(num1);

const num2 = BigInt('99'); // This is also a BigInt
console.log(num2);

const num3 = BigInt('99'); 

console.log(num1 == num2) // true
console.log(num2 == num3) // true
console.log(typeof num1) // bigint
```
#### Boolean data type 
- Boolean data type is a data type that has one of two possible values, either true or false. In programming, it is used in logical representation or to control program structure.
- The **boolean()** function is used to convert any data type to a boolean value.
  - According to the rules, false, 0, NaN, null, undefined, empty string evaluate to false.
  -  other values evaluates to true.
- Using the double exclamation mark ```!!``` in JavaScript we can convert a value to its corresponding boolean representation.
```js
console.log(Boolean(1)) //true
console.log(!!1)  //true
```
#### Symbol data type 
Symbol is an immutable primitive value that is unique. It\'s a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.
**Example:**
```js
/**
 * Symbol Data Type
 */
const NAME = Symbol()
const person = {
  [NAME]: 'Ritika Bhavsar'
}

person[NAME] // 'Ritika Bhavsar'
```

#### function in Node.js
Functions are **first class citizens** in Node\'s JavaScript, similar to the browser\'s JavaScript.
A function can have attributes and properties also. It can be treated like a class in JavaScript.



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

<div align="right">
    <b><a href="##topics">↥ back to top</a></b>
</div>

## 🚀 NODE.JS ARCHITECTURE
###  Node.js Event loop
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

### Difference between process.nextTick() and setImmediate()

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
### Reactor Pattern in Node.js?
**Reactor Pattern** is used to avoid the blocking of the Input/Output operations. It provides us with a handler that is associated with I/O operations. When the I/O requests are to be generated, they get submitted to a demultiplexer, which handles concurrency in avoiding the blocking of the I/O mode and collects the requests in form of an event and queues those events.

 **There are two ways in which I/O operations are performed:**

**1. Blocking I/O:** Application will make a function call and pause its execution at a point until the data is received. It is called as "Synchronous".

**2. Non-Blocking I/O:** Application will make a function call, and, without waiting for the results it continues its execution. It is called as "Asynchronous".

![image](https://github.com/user-attachments/assets/055799bf-556b-4e61-bfd1-b2b63803c0fd)


#### Reactor Pattern comprises of
-  **Resources:** They are shared by multiple applications for I/O operations, generally slower in executions.

- **Synchronous Event De-multiplexer/Event Notifier:** This uses Event Loop for blocking on all resources. When a set of I/O operations completes, the Event De-multiplexer pushes the new events into the Event Queue.

- **Event Loop and Event Queue:** Event Queue queues up the new events that occurred along with its event-handler, pair.

- **Request Handler/Application:** This is, generally, the application that provides the handler to be executed for registered events on resources.


### Q. What are the global objects of node.js?
Node.js Global Objects are the objects that are available in all modules. Global Objects are built-in objects that are part of the JavaScript and can be used directly in the application without importing any particular module.

These objects are modules, functions, strings and object itself as explained below.

- **1. global:** It is a global namespace. Defining a variable within this namespace makes it globally accessible.
```js
var myvar;
 ```

- **2. process:** It is an inbuilt global object that is an instance of EventEmitter used to get **information on the current process**. It can also be accessed using require() explicitly.

- **3. console:** It is an inbuilt global object used to print to stdout and stderr.
 ```js
 console.log("Hello World"); // Hello World
 ```

- **4. setTimeout(), clearTimeout(), setInterval(), clearInterval():** The built-in timer functions are globals
 ```js
 function printHello() {
    console.log( "Hello, World!");
 }
 
 // Now call above function after 2 seconds
 var timeoutObj = setTimeout(printHello, 2000);
 ```

- **5. __dirname:** It is a string. It specifies the name of the directory that currently contains the code.
 ```js
 console.log(__dirname); // D:\new Lesson\backend\master-nodejs-fundamentals
 ```

- **6. __filename:** It specifies the filename of the code being executed. This is the resolved absolute path of this code file. The value inside a module is the path to that module file.
 ```js
 console.log(__filename); // D:\new Lesson\backend\master-nodejs-fundamentals\example_code.js
 ```

### Q. What is Chrome v8 engine?
V8 is a C++ based open-source JavaScript engine developed by Google.  it parses and executes JavaScript code while browsing with Chrome.

It was originally designed for Google Chrome and Chromium-based browsers ( such as Brave ) in 2008, but it was later utilized to create Node.js for server-side coding.

It provides a runtime environment for the execution of JavaScript code. The best part is that the JavaScript engine is completely independent of the browser in which it runs.

### Q. Why is LIBUV needed in Node JS?
libuv is a C library originally written for Node.js to abstract non-blocking I/O operations. 
It provide the below features
- It allows the CPU and other resources to be used simultaneously while still performing I/O operations, thereby resulting in efficient use of resources and network.
- It facilitates an event-driven approach wherein I/O and other activities are performed using callback-based notifications.
- It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming
- It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.


### How V8 compiles JavaScript code ?
There are basically three steps involved in processing the code:
- Parsing the code
- Compiling the code
- Executing the code

1. **Parsing Phase:** During the parsing phase, the code is broken down into its respective tokens(parts).
   
   ```const sum = 5 + 7```
  Here const is a token, sum is a token, 5 is a token, ‘+’ is a token, and 7 is a token. After the code is broken down into tokens, it is given to the syntax parser which converts the code into an Abstract Syntax Tree (AST).
2. **Compilation phase:** Compilation is the process of converting human-readable code to machine code. 
  There are two ways to compile the code : 
  - **Using an Interpreter:** The interpreter scans the code line by line and converts it into byte code. Example: Python
  - **Using a Compiler:** The Compiler scans the entire document and compiles it into highly optimized byte code. Example: Java

   The V8 engine uses both a compiler and an interpreter and follows just-in-time (JIT) compilation to speed up the execution. JIT compiling works by compiling small portions of code that are just about to be executed. This prevents long compilation time and the code  
   being compiles is only that which is highly likely to run.

3. **Execution Phase:** The byte code is executed by using the Memory heap and the Call Stack of the V8 engine’s runtime environment.



### Q. What is callback hell in Node.js?
The callback hell contains **complex nested callbacks**. Here, every callback takes an argument that is a result of the previous callbacks. In this way, the code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions are affected.

An asynchronous function is one where some external activity must be completed before a result can be processed; it is "asynchronous" in the sense that there is an unpredictable amount of time before a result becomes available. Such functions require a callback function to handle errors and process the result.

Example:
```js
/**
 * Callback Hell
 */
getData(function(a){
    getMoreData1(a, function(b){
        getMoreData2(b, function(c){ 
            getMoreData3(c, function(d){ 
	            getMoreData4(d, function(e){ 
		            ...
		        });
	        });
        });
    });
});
```
### Q. How to avoid callback hell in Node.js?

**1. Managing callbacks hell using promises:**

Promises are alternative to callbacks while dealing with asynchronous code. Promises return the value of the result or an error exception. The core of the promises is the `.then()` function, which waits for the promise object to be returned.

The `.then()` function takes two optional functions as arguments and depending on the state of the promise only one will ever be called. The first function is called when the promise if fulfilled (A successful result). The second function is called when the promise is rejected.

**Example:**

```js
/**
 * Promises
 */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Successful!");
  }, 300);
});
```

**2. Using Async Await:**

Async await makes asynchronous code look like it's synchronous. This has only been possible because of the reintroduction of promises into node.js. Async-Await only works with functions that return a promise.

**Example:**

```js
/**
 * Async Await
 */
const getrandomnumber = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 20));
        }, 1000);
    });
}

const addRandomNumber = async function(){
    const sum = await getrandomnumber() + await getrandomnumber();
    console.log(sum);
}

addRandomNumber();
```
### Q. What is typically the first argument passed to a callback handler?

The first parameter of the callback is the error value. If the function hits an error, then they typically call the callback with the first parameter being an Error object.

**Example:**
```js
/**
 * Callback Handler
 */
const Division = (numerator, denominator, callback) => {
    if (denominator === 0) {
      callback(new Error('Divide by zero error!'));
    } else {
      callback(null, numerator / denominator);
    }
};

// Function Call
Division(5, 0, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`Result: ${result}`);
});
```

### Q. What are the timing features of Node.js?

**1. setTimeout()**

```setTimeout(callback, delay, args )```
```js
function printMessage(arg) {
  console.log(`${arg}`);
}
setTimeout(printMessage, 1000, 'Display this Message after 1 seconds!');
```

**2. setImmediate()**

```setImmediate(callback, args)```
```js
setImmediate(function (params) {
   console.log('setImmediate() function running...', params);
}, "Hello");
```

**3. setInterval()**

```setInterval(callback, delay, args)```
```js
setInterval(function() {
    console.log('Display this Message intervals of 1 seconds!');
}, 1000);
```

### Describe the event-driven programing in Node.js
Event-driven programming, a hallmark of Node.js, uses an event, listener, and emitter architecture to handle asynchronous tasks. This design centers around events and how they trigger actions in the attached listeners.

**Core Components:**
- **Event Emitter:** Acts as the event registry and dispatcher, letting objects register interest in particular events and emit these events when they occur.
- **Event Handler (Listener):** Associates with a particular event through registration. These callback functions will be asynchronously carried out when a matching event is emitted.

Code Example: Event Emitter and Handlers
Here is the Node.js code:
```js
const { EventEmitter } = require('events');
const emitter = new EventEmitter();
emitter.on('event-name', (eventArgs) => {
    console.log(`Event-name was emitted with arguments: ${eventArgs}`);
});

emitter.emit('event-name', 'Some Payload');
```








<div align="right">
    <b><a href="#master-nodejs-fundamentals">↥ back to top</a></b>
</div>

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



















<div align="right">
    <b><a href="#master-nodejs-fundamentals">↥ back to top</a></b>
</div>

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

<div align="right">
    <b><a href="#topics">↥ back to top</a></b>
</div>

## 🚀 NODE.JS MULTITHREADING

### Q. What is a Single-Threaded Process?
A single-threaded process is the execution of programmed instructions in a single sequence. Having said that, if an application has the following set of instructions:

- Instruction A
- Instruction B
- Instruction C

If these set of instructions are executed in a single-threaded process, the execution would look like the following:
![image](https://github.com/user-attachments/assets/c9913f0c-4890-4913-8435-ea1ea9009223)


### Q. What is a Multi-threaded Process?
A multi-threaded process is a program that can run multiple threads at the same time, sharing resources and executing independently

Therefore, instructions won’t have to wait to execute unless multiple instructions are grouped within different sequences.
![image](https://github.com/user-attachments/assets/6090b303-924f-4332-a6ff-ae744ae0dd15)

### Q. Is Node.js entirely based on a single-thread?
Yes, it is true that Node.js processes all requests on a single thread. But it is just a part of the theory behind Node.js design. In fact, more than the single thread mechanism, **it makes use of events and callbacks to handle a large no. of requests asynchronously**.

Moreover, Node.js has an optimized design that utilizes both JavaScript and C++ to guarantee maximum performance. JavaScript executes on the server-side by the Google Chrome v8 engine. The libuv library takes care of the non-sequential I/O via background workers.

To explain it practically, let's assume there are 100s of requests lined up in Node.js queue. As per design, the main thread of Node.js event loop will receive all of them and forwards to background workers for execution. Once the workers finish processing requests, the registered callbacks get notified on the event loop thread to pass the result back to the user.

### Q. How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?
Since Node.js is by default a single thread application, it will run on a single processor core and will not take full advantage of multiple core resources. 

However, Node.js provides support for deployment on multiple-core systems, to take greater advantage of the hardware. 

The Cluster module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.

The cluster module helps to spawn new processes on the operating system. Each process works independently, so you cannot use a shared state between child processes. Each process communicates with the main process by IPC and the pass server handles back and forth.

Cluster supports two types of load distribution:
- The main process listens on a port, accepts a new connection, and assigns it to a child process in a round-robin fashion.
- The main process assigns the port to a child process and child process itself listen the port.


### Q. Since node is a single-threaded process, how to make use of all CPUs ?
- Node.js does support forking multiple processes using the cluster module ( which are executed on different cores ).
- It is important to know that the state is not shared between the master and forked process.

[For code example check the cluster module section](https://github.com/RohitChanda/master-nodejs-fundamentals/edit/master/README.md#-cluster-in-node)

### Q. If Node.js is single threaded then how it handles concurrency ?
Node js uses an event loop to maintain concurrency and perform non-blocking I/O operations.

### Q. How does Node.js handle child threads?
Node.js employs event-driven architecture and non-blocking I/O for efficiency.

While Node.js operates off a single main thread, it can harness the full power of **multi-core system**s by **launching child threads** for specific tasks, such as file compression or image processing.

To manage these child threads, Node.js uses a combination of:
- A thread pool, powered by the libuv library.
- Worker threads for dedicated, offloaded computation.

### Q. How does call stack work inside Node.js?
As soon as Node js starts, it initializes an event loop. The event loop works on a queue (which is called an event queue) and performs tasks in FIFO (First In First Out) order.

It executes a task only when the call stack is empty. The call stack works in LIFO(Last In First Out) order.

The event loop continuously checks the call stack to check if there is any task that needs to be run. Now whenever the event loop finds any function, it adds it to the stack and runs in order.

**Example**
```js
/**
 * Concurrency
 */
function add(a, b) {
  return a + b;
}

function print(n) {
  console.log(`Two times the number ${n} is ` + add(n, n));
}

print(5);
```
Here,
- the function print(5) will be invoked and will push into the call stack.
- When the function is called, it starts consoling the statement inside it but before consoling the whole statement it encounters another function add(n,n) and suspends its current execution, and pushes the add function into the top of the call stack.
- Now the function will return the addition a+b and then popped out from the stack and now the previously suspended function will start running and will log the output to console and then this function too will get pop from the stack and now the stack is empty. So this is how a call stack works.

### Q. How to kill child processes that spawn their own child processes in Node.js?
If a child process in Node.js spawns its child processes, the kill() method will not kill the child process\'s child processes. For example, if I start a process that starts it\'s own child processes via the child_process module, killing that child process will not make my program to quit.

```js
const spawn = require('child_process').spawn;
const child = spawn('my-command');

child.kill();
```

The program above will not quit if `my-command` spins up some more processes.

**PID range hack:**

We can start child processes with {detached: true} option so those processes will not be attached to the main process but will go to a new group of processes. Then using the ```process.kill(-pid)``` method on the main process we can kill all processes that are in the same group of a child process with the same pid group. In my case, I only have one process in this group.

```js
const spawn = require('child_process').spawn;
const child = spawn('my-command', {detached: true});

process.kill(-child.pid);
```

Please note - before pid. This converts a pid to a group of pids for process kill() method.




<div align="right">
    <b><a href="#topics">↥ back to top</a></b>
</div>


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
// so when the file is reading ,in that time we will automatically convert into zip and write into another file
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



