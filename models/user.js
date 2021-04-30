'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    description: DataTypes.STRING,
    reservation_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER,
    profile_image: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true, //soft delete
    timestamps: true,
    modelName: "user"
  });
  return User;
};