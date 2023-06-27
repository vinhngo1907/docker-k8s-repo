const keys = require("./keys");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser());
app.use(cors());

// Redis client setup
const redis = require("redis");
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: ()=>1000
});

const redisPublisher = redisClient.duplicate();

// Express routes handler
app.listen(5000, (err)=>{
    console.log("Listening");
})