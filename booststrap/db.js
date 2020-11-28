var mysql = require('mysql');
 
//var connectDB =()=>{

var conn=mysql.createConnection({
  database: 'mytest',
  host: "127.0.0.1",
  user: "root",
  password: "Admin123@",
  port:'3306'
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
//}
module.exports=conn;