const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const Country = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    code:{
      type:DataTypes.STRING(3),
      unique:true
    },    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull:false
    },
    continent:{
      type: DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subregion:{
      type:DataTypes.STRING,
    },
    area:{
      type:DataTypes.DECIMAL,
    },
    population:{
      type:DataTypes.DECIMAL,
    }

  });
};

module.exports=Country