const express = require("express");
const router = require("./routes/index")

const server=express();

server.listen(3001,()=>{
  console.log('Server is running on port 3001');
})

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


server.use(express.json());
server.use("/rickandmorty", router);

