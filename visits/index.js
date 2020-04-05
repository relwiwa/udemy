const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
    /*  name of container from docker-compose file
        docker will see request to redis-server and redirect to redis container */
    host: "redis-server",
    port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
    // exit code 0 is regular exit not related to errors
    process.exit(0);
    client.get("visits", (err, visits) => {
        res.send("Number of visits is " + visits);
        client.set("visits", parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
