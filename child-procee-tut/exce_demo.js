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
