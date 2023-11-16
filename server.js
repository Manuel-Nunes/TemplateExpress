import express from "express";

const App = express();

const PORT = 8080;

App.use(express.static("static/"));


App.listen(PORT,()=>{
  console.log("Listening on http://localhost:8080")
})
