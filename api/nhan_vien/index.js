const express = require("express")
const db=require('../../booststrap/db');
const { route } = require("..");
const router = express.Router()

router.get('/danh-sach-nhan-vien', function(req, res){
    db.query("SELECT * FROM nhan_vien", (err, result) => {
        if(err){
            console.log(err); 
            res.json({"error":true});
        }
        else { 
            console.log(result); 
            res.json(result);
        }
    })
})

router.post('/nhan-vien/them', function(req, res){
    db.query("INSERT INTO nhan_vien SET ?", [req.body],(err, result)=> {
        if(err) res.send("add failed");
        else {
            res.send("successfully");
        }
    })
})

router.put('/nhan-vien/sua', function(req, res){
    db.query("UPDATE nhan_vien SET ? WHERE ma = ?", [req.body, req.body.ma], (err, result)=>{
        if(err) res.send("update failed");
        else {
            res.send("update successfully");
        }
    })
})

router.delete('/nhan-vien/xoa', function(req, res){
    db.query("DELETE FROM nhan_vien WHERE ma = ?", [req.body.ma],(err, result) => {
        if(err) res.send("delete failed");
        else {
            res.send("successfully");
        }
    })
})

module.exports = router;