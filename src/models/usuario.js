const { DataTypes } = require('sequelize');

module.exports = (database) => {
   database.define("Users", {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false,
   },
   name:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
   },
   email:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false 
   },
   password:{
      type:DataTypes.STRING,
      unique:true,
      allowNull:false
   },
   confirmPassword:{
      type:DataTypes.BOOLEAN,
   },
   phoneNumber:{
      type:DataTypes.INTEGER,
      allowNull:false
   },
   birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null, 
    },
}, { timestamps: false });
};
