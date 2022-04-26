const client = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.json())

app.use(function (req, res, next) {
  const corsWhiteList = [
    "https://ezetap-test-apis.herokuapp.com",
    "https://localhost:3000",
    ]
    
  if(corsWhiteList.indexOf(req.headers.origin) !== -1){
    

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  //res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  }
  next();
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

client.connect()

app.get("/" , (req, res) => {
    res.send("Go to /states")
})

// app.get("/", (req, res) => {
//     client.query("SELECT * FROM users", (err, result) => {
//       if (err) {
//         console.log(err)
//         res.sendStatus(500)
//       } else {
//         res.send(result.rows)
//       }
//     })
//   })