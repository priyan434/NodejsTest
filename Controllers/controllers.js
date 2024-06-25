const con = require("../database/conn");

exports.getVendorUsers = async (req, res) => {
  try {
    const { prId, custOrgId } = req.body;
    if (!prId) res.status(400).send("error");
    if (!custOrgId) res.status(400).send("error");
    console.log(prId, custOrgId);
    
    var sql=`select * from Categories`


    con.query(sql,function(err,result){
        if(err) throw err
        return res.status(200).json(result)
    })


    // res.status(200).json([{ message: "records" }]);
  } catch (error) {
    res.status(500).send("server error");
  }
};
