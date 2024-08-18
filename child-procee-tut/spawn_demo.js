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