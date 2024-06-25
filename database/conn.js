var mysql=require("mysql")

var con=mysql.createConnection({
    host:"nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
    user:"candidate",
    password:"NoTeDeSt^C10.6?SxwY882}",
    database:"conqtvms_dev"
   
})
con.connect(function(err){
    if(err) throw err
    console.log("connected");
})


module.exports= con
