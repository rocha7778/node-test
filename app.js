const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');

const app = express();





app.get('/', (request, response)=>{
    response.send({info: 'hello world'})
})

app.listen(config.PORT,()=>{
    console.log(`App running on port ${config.PORT}.`);
})

