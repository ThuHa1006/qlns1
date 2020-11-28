const express=require('express');
const bodyParser=require('body-parser')
const port = 3000;

const api=require('./api'); // chỗ này nãy import sai nãy là dùng cái routers.js là cái file comment hết rồi nên gọi bị lỗi
const bootstrap = require('./booststrap');
const app=express();
app.use(bodyParser.json());
app.use(api)


// Start the server
app.listen(port, (err) => {
    if (err) return console.log(`Error: ${err}`);
    console.log(`Server is listen on port ${port}`);
})