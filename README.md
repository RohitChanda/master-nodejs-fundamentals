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


