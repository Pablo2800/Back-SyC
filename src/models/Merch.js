const { DataTypes } = require('sequelize');

module.exports = (database) => {
  database.define("Merch", {
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
    imageSrc:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageAlt:{
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
    }
  });
};
