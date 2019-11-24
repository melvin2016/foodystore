const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname,'/total-cloud-intern/build')));




app.listen(PORT, ()=>{
    console.log(`Server Running on PORT : ${PORT}`)
})





