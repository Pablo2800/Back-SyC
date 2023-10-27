const {Users} = require("../db");

const showUsers =async(req,res)=>{
    try{
        const allUsers= await Users.findAll()
        return res.status(200).json(allUsers);
    }
    catch (error) {
        console.error('Error al obtener los usuarios de la base de datos:', error);
        throw error;
    }
}
module.exports = {showUsers}