const express = require("express");
const path = require("path"); // Add this line
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const cors = require('cors');
const { questionRouter } = require("./routes/questionRoutes");
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
app.use("/api/v1/", questionRouter);

dotenv.config({ path: "config.env" })
let PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Your App Works on PORT ${PORT}`);
})

app.use(express.static(path.join(__dirname, "./frontend/build")))
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    )
})

let MONGOL = process.env.MONGO_URL || "mongodb://0.0.0.0:27017"
mongoose.connect(MONGOL).then(() => {
    console.log("Database Connection Successful");
}).catch((err) => {
    console.log("database connection failed " + err);
})
