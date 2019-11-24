const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');
const PORT = process.env.PORT || 8080;

// compress all responses
app.use(compression());

app.use('/',express.static(path.join(__dirname,'/total-cloud-intern/build')));



app.listen(PORT, ()=>{
    console.log(`Server Running on PORT : ${PORT}`)
})





