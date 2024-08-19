const multer = require("multer");
const path = require("path");

const storageConfig  = multer.diskStorage({
    // destination is uploads folder
    destination: path.join(__dirname, "../uploads"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// * File filter --> ACCEPT ONLY IMAGES
const fileFilterConfig = function (req, file,cb) {
    if(!(file.mimetype == "image/jpeg" || file.mimetype == "image/png")) {
        cb(new Error("file not accepted"), false)
    } else {
        cb(null, true);
    }
}

const upload = multer({
    storage: storageConfig,
    limits : {
        fileSize: 1024 * 1024 * 10 // limits file size to 5 mb
    },
    fileFilter: fileFilterConfig
});

module.exports = upload;