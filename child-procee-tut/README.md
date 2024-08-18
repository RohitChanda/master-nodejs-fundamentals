# Node Child process

## Child Process Module
The child_process module provides several methods to create and control child processes, each serving different purposes depending on the level of control and interaction you need with the spawned process.

**exec():** Executes a command in a shell and buffers the output.

**execFile():** Directly executes a file without a shell, which is more efficient than exec() for simple scripts or commands.

**spawn():** Launches a new process with a given command, providing streams for stdin, stdout, and stderr.

**fork():** A specialized version of spawn() specifically designed to spawn new Node.js processes and establish a communication channel between the parent and child.


### exec() method
**command**: Accepts a string that specifies the command to run with space-separated arguments.

**options**: Some of the options available are cwd, env, encoding, shell, timeout etc

**callback**: The callback function is called when the process terminates. The arguments to this function are error, stdout, and stderr respectively.
Return Value: Returns an instance of ChildProcess.

```js
//Executes a command in a shell and buffers the output.
const {exec} = require("child_process");

//Counts the number of directory in current working directory
exec('dir | find /c /v ""', (err, stdout, stderr) => {
    if(err) {
        // * This error comes  while executing this command or This command might not exists not your system
        console.log(`err: ${err.message}`)
        return;
    }

    if(stderr) {
        // * This error comes after the command executed
        console.log(`stderr: ${stderr}`)
        return;
    }

    console.log('stdout', stdout)
})

```

### exceFile() method
The specified executable file is spawned directly as a new process making it slightly more efficient than child_process.exec().

```js
const {execFile} = require("child_process");

execFile('node', ['test.js'], (err, stdout, stderr) => {
    if(err) {
        // * This error comes  while executing this command or This command might not exists not your system
        console.log(`err: ${err.message}`)
        return;
    }

    if(stderr) {
        // * This error comes after the command executed
        console.log(`stderr: ${stderr}`)
        return;
    }

    console.log('stdout', stdout)
})
```


### spawn() method
**command**: Accepts a string which is the command to run.

**args**: List of string arguments. The default value is an empty array.

**options**:

    **shell**: Accepts a boolean value. If true, runs the command inside of a shell. The different shells can be specified as a string. The default value is false which implies no shell. By default, spawn() does not create a shell to execute the command hence it is important to pass it as an option while invoking the child process.

**Return Value**: Returns a ChildProcess object.

```js
const { spawn } = require("child_process");
//* spawn doesnot use the buffer. Its uses the stream
// const child = spawn(
//     'code', // this is the command 
//     ['.'],  // this is the arguments
//     {shell:true}
// )
// create a folder name myfoler
const child = spawn(
    'mkdir', // this is the command 
    ['myfolder'],  // this is the arguments
    { shell: true }
)

child.stdout.on('data',
    (data) => {
        console.log(`stdout: ${data}`);
    });

child.stderr.on('data',
    (data) => {
        console.error(`stderr: ${data}`);
    });

child.on('close',
    (code) => {
        console.log(
            `child process exited with code ${code}`
        );
    });
```


### fork() method
child_process.fork() is a variant of child_process.spawn() allowing communication between parent and child via send() . It facilitates the isolation of compute-heavy tasks from the main event loop, but numerous child processes can impact performance due to each having its own memory.

in fork_demo file

```js
const express = require("express");
const app = express();
const {fork} = require("child_process");
const port = 8080;

app.get("/three", (req, res) => {
    // * When ever a request come over this route we create a child process which will run in a different child process, that way it will utilize the full power of cpu
    const child = fork("./longTask.js");
    
    // * Sending a message to to start the computation
    child.send({msg: "start", time: Date.now()}); // sending data

    // * Listen the event for child process
    child.on("message",(sum) => {
        console.log("sum", sum)
        res.json({
            sum: sum,
        });
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

```

In longTask.js

```js
// console.log("child created", process.pid)
function longComputationTask() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}

process.on("message",(message) => {
    if(message.msg == "start") {
        const sum = longComputationTask();
        process.send(sum);
    }
})
```