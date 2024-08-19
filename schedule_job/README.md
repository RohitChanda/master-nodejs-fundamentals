# Schedule job in Node.js using node-schedule

Node-schedule is open source, MIT-licensed package for scheduling jobs in Node. It is the third most popular Node scheduler .

Node-schedule is mainly for time-based rather than interval-based scheduling, though you can also use it flexibly. With Node-schedule, you can easily schedule a job to run at specific dates with an optional recurrence configuration.

Node-schedule offers you the flexibility of scheduling jobs using cron-style scheduling and date-based scheduling. 

## Cron Job
With cron-style scheduling, you can pass a cron expression to specify when the job is triggered and the expression is parsed using cron-parser:

```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```

```js
// after every one minutes
schedule.scheduleJob('*/1 * * * *', () => {
    console.log('cron job running at @', new Date().toString())
});

// after every 5 sec
schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('cron job running at @', new Date().toString())
});
```

## At a particular date and time
On the other hand, with date-based scheduling, you can pass an actual JavaScript date object to specify the exact date when a job is to be executed. It also provides an option to bind current data for use in the future, as illustrated in the code snippet below

```js
schedule.scheduleJob(someDate, () => {
    console.log('Job ran at @', new Date().toString());
});
```

There are many package available to schedule job in Node.js:

- Agenda
- Node-schedule
- Node-cron
- Bree
- Cron
- Bull
- Bottleneck

