# master-nodejs-fundamentals
Master Node.js fundamentals


## Topics
 - [Module System In Node.js](https://github.com/RohitChanda/master-nodejs-fundamentals/edit/main/README.md#module-system-in-nodejs) 



## Module System in Nodejs
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
