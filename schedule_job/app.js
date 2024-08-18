const schedule = require("node-schedule");

const someDate = new Date(2024, 7, 19, 1, 15, 50, 0);

// at a particular date and time
schedule.scheduleJob(someDate, () => {
    console.log('Job ran at @', new Date().toString());
});

// * Cron job
// after every one minutes
schedule.scheduleJob('*/1 * * * *', () => {
    console.log('cron job running at @', new Date().toString())
})

// after every 5 sec
schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('cron job running at @', new Date().toString())
})

