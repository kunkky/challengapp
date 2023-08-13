const express = require("express");
const app = express();
const dotenv =require ("dotenv");
const mongoose = require('mongoose')
const cors = require('cors');
const { questionRouter } = require("./routes/questionRoutes");
const cookieParser = require('cookie-parser'); // Require cookie-parser


app.use(cookieParser()); // Use cookie-parser middleware


//user the api created 
app.use(cors());
app.use("/api/v1/", questionRouter);

dotenv.config({path: "config.env"})
let PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
console.log(`Your App Works on PORT ${PORT}`);
})

//servefrontend
app.use(express.static(path.join(__dirname, "./frontend/build")))
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})

//conect to database
let MONGOL = process.env.MONGO_URL || "mongodb://0.0.0.0:27017"
mongoose.connect(MONGOL).then(()=>{
console.log("Database Connection Successful");
}).catch((err)=>{
console.log("database connection failed " + err);
})
