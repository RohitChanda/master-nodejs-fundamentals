// create a .sh file -> type NUL > SomeFile.sh
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