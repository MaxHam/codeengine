const express = require("express");
const app = express();
const request = require("request");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser")
app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())



const port = process.env.port || 8080;
const solverURL = process.env.solverURL || "http://localhost:3001"
console.log(solverURL)


app.get('/',function(req,res){
   res.sendFile(path.join(__dirname+'/index.html'));
 });

 app.post("/solve", async(req, res)=> {
  //  console.log(res)
  await request.post(
    {
      url: solverURL+"/solve",
      gzip: true,
      agentOptions: {
        rejectUnauthorized: false
      }
    },
    function(error, resp, body) {
      if (error) {
        console.log(error);
        res.status(400).send(error.message);
      }
      else{
      //console.log(body);
      console.log(resp)
      res.send(body);
      }
    }
  )
 })


app.use(function(error, req, res, next) {
   res.status(500).send(error.message);
 });


app.listen(port, ()=> console.log(`Running at Port ${port}`));


