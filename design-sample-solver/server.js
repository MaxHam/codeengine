const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
app.use(cors());

const port = process.env.port || 3001;

 app.post("/solve", async(req, res)=> {
   console.log(res)
   res.json("Magic was sent from the solver app!");
 })

 app.get('/',function(req,res){
  res.send('Solver works!');
});


app.use(function(error, req, res, next) {
   res.status(500).send(error.message);
 });


app.listen(port, ()=> console.log(`Running at Port ${port}`));


