const db = require("./../../db/db");

// this function to get all doctors 
const getAllDoctors = (req, res) => {
 

  const query = `SELECT  * FROM users 
  RIGHT JOIN doctorsDetails ON users.id = doctorsDetails.user_id WHERE users.is_deleted =0 AND role_id=2`;
  db.query(query, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};




const doctorDetailsFilter = (req, res) => {
  const { num1, num2 } = req.body;
  const query = `SELECT  * FROM users 
  RIGHT JOIN doctorsDetails ON users.id = doctorsDetails.user_id WHERE users.is_deleted =0 AND role_id=2
   AND price BETWEEN ? AND ? `;
  const data = [num1, num2];
  db.query(query, data,(err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};







// this function to get doctor by id
const getDoctorById=(req,res)=>{
    const id=req.params.id
    const query=`SELECT * FROM users WHERE role_id=2 AND id=${id}`
    db.query(query, (err,result)=>{
        if(err) res.status(400).send(err);
        res.status(200).json(result);
    })
}


module.exports = {
  getAllDoctors,
  getDoctorById,
  doctorDetailsFilter,
};
