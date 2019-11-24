const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use('/',express.static(path.join(__dirname,'/total-cloud-intern/build')));

app.listen(PORT, ()=>{
    console.log(`Server Running on PORT : ${PORT}`)
})





