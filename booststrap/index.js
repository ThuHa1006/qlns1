const connectDB=require('./db');

const bootstrap=()=>{
    connectDB()
}

module.exports=bootstrap;