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
- ECMAScript modules etc
