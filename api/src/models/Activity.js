const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('activity',{
        name:{
            type:DataTypes.STRING,
            unique:true,
            allownull:false
        },
        difficulty:{
            type:DataTypes.ENUM("1","2","3","4","5"),
            
        },
        duration:{
            type:DataTypes.INTEGER,
            allownull:false
        },
        description:{
            type:DataTypes.STRING
        },
        season:{
            type:DataTypes.STRING,
        }
    })
}