const { DataTypes } = require('sequelize');

module.exports = (dataBase) => {
  dataBase.define("Products", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageurl:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    countInStock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
