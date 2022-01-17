const express = require('express');
const { request } = require('http');
const app = express();
const path = require('path');
const cors = require("cors");
app.use(cors());



app.use("/static", express.static('./js/'));
const port = process.env.port || 8081;
const solverURL = process.env.solverURL || null
console.log(solverURL)


app.get('/',function(req,res){
   res.sendFile(path.join(__dirname+'/index.html'));
 });

 app.post("/solve", async()=> {
    await request.post({
      url: solverURL+"/solve",
      gzip: true,
      agentOptions: {
        rejectUnauthorized: false
      }
    },
    function(error, resp, body) {
      if(resp) {
        console.log(resp);

        console.log(body);
      res.send(body);
      }
      else if (error) {
        console.log(error);
        res.status(400).send(error.message);
      }
      else{
      console.log(body);
      res.send(body);
      }
    })
 })

 app.get("/result", async(req, res) => {
   req.pipe(
     await request.get(
      {
        url: solverURL+"/result",
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
        console.log(body);
        res.send(body);
        }
      }
    )
  );

});

app.use(function(error, req, res, next) {
   res.status(500).send(error.message);
 });


app.listen(port, ()=> console.log(`Running at Port ${port}`));


