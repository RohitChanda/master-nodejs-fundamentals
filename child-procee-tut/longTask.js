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