const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('videogame', 
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description:{
        type: DataTypes.TEXT,
        allowNull: false,
      },
      platforms:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      image:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      release_date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      rating:{
        type: DataTypes.FLOAT,
        allowNull: false,
      }
    },
    {timestamps: false});
};
