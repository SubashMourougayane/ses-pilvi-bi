"use strict";

module.exports = (sequelize, DataTypes) => {
  var templates = sequelize.define(
    "templates",
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
      aws_key_id : {
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
      html_content : {
          type : DataTypes.STRING
      }
    });

  templates.associate = (models) => {
    templates.belongsTo(models.users, {
        as : "user" , 
        foreignKey : "user_id"
    })

  }

    
  return templates;
}