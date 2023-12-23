const express = require('express');
const app = express();
const connectDb = require("./db")
const bodyParser = require('body-parser');


const port = 5000;

//cors middleware
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.use(bodyParser.json());
app.use(express.json())
app.use('/api',require('./routes/createUser'));
app.use('/api',require('./routes/DisplayData'));
app.use('/api',require("./routes/OrderData"));

app.get('/',(req,res) => {
    res.send("Hello world!")
})

app.listen(port,()=>{
    console.log(`app listeing on port ${port}`)
})

connectDb();