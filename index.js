const express = require("express");
const app = express();
const port = process.env.PORT ||  5000;

app.get("/", (req, res) => {
  res.send("Dev Skill");
});

app.listen(port, () =>{
    console.log(`Dev Skill listening on port ${port}`);
})
