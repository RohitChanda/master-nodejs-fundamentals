const express = require("express");
const routes = require("./router");
const app = express();
const port = 8000;

// app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(express.json())
app.use(routes);


app.listen(port, () => {
  console.log(`Example app listening http://127.0.0.1:${port}`);
});
