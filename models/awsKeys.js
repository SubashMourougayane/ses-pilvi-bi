"use strict";

module.exports = (sequelize, DataTypes) => {
  var aws_keys = sequelize.define(
    "aws_keys",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          isInt: {
            args: true,
            message: "Invalid ID"
          }
        }
      },
      user_id : {
          type : DataTypes.BIGINT,
          validate : {
            isInt: {
                args: true,
                message: "Invalid ID"
              }
          }
      },
      name : {
        type : DataTypes.STRING
      },
      access_key : {
          type : DataTypes.STRING
      },
      secret_key : {
          type : DataTypes.STRING
      }
    });

  aws_keys.associate = (models) => {
    aws_keys.belongsTo(models.users, {
        as : "user" , 
        foreignKey : "user_id"
    })
  }

    
  return aws_keys;
}