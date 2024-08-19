const express = require("express");
const upload = require("./middleware/fileUpload");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const PORT = 8080;
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// * ROUTE FOR UPLOAD FILE
app.post("/upload-file",upload.single("file_data") ,(req, res,next) => {
  try {
    if (!req.file) {
      res.status(413).json({ msg: "File not uploaded!, Please attach jpeg file under 5 MB"});
      return;
    }
    // successfull completion
    res.status(201).json({ msg: "Files uploaded successfully"});
  } catch (error) {
    next(error)
  }
});



// * ERROR HANDLER MIDDLEWARE (Last middleware to use)
app.use(errorHandler);

// * LISTEN TO PORT
app.listen(8080, () => {
  console.log(`server is started and listening at port: ${PORT}`);
});
