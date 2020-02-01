'use strict';

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    "users",
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
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: false,
            message: "Invalid Email"
          }
        }
      },
      password: {
        type: DataTypes.STRING
      },
      has_linked: {
        type: DataTypes.BOOLEAN
      }

    }


  );

  users.associate = (models) => {
    users.hasMany(models.aws_keys, {
      as: "awsKey",
      foreignKey: "aws_key_id"
    })

    users.hasMany(models.templates, {
      as: "template",
      foreignKey: "template_id"
    })

    users.createUser = (user) => {
      return users.create(user);
    }
    users.login = async (userObj) => {
      return await users.findOne({
          where: {
              email: userObj.email
          },
          attributes: ['id', 'email', 'password']
      })
  }
  }


  return users;
}