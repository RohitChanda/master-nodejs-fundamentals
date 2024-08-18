const express = require("express");
const app = express();
const {fork} = require("child_process");
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/one", (req, res) => {
    const sum = longComputation();
    res.json({
        sum: sum,
    });
});

app.get("/two", async (req, res) => {

    const sum = await longComputePromise();
    res.json({
        sum: sum,
    });
});

app.get("/three", (req, res) => {
    // * When ever q request come over this route we create a child process which will run in a different child process, that way it will utilize the full power of cpu
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

function longComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}

function longComputePromise() {
    return new Promise((resolve, reject) => {
        let sum = 0;
        for (let i = 0; i < 1e9; i++) {
            sum += i;
        }
        resolve(sum);
    });
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
