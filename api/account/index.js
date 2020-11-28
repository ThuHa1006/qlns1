const express = require("express")
const db=require('../../booststrap/db');
const { route } = require("..");
const router = express.Router() // chỗ này nãy cũng bị import sai luôn

router.post('/register', function(req, res){
    db.query("SELECT email FROM account")
})