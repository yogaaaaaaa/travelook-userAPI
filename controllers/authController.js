const e = require("express");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

class AuthController {
  async getToken(req, res) {
    try {
      //get the req.user from authRoutes
      // and create body variable
      console.log(req.user.id)
      const body = {
        id: req.user.id,
        //  role: req.user.role,
        //  nama: req.user.nama,
      };

      //create jwt token with  {user{id: req.user._id}}value
      //and the key is porcess.env.JWT_SECRET
      const token = jwt.sign(body, process.env.JWT_SECRET);
      //if success
      return res.status(200).json({
        message: "sukses",
        token,
      });
    } catch (e) {
      //if error
      console.log(e);
      return res.status(500).json({
        message: "internal server error",
        error: e,
      });
    }
  }

  async update(req, res) {
    try {
      // Update data

      let updatedData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      // If success
      console.log(updatedData);
      return res.status(201).json({
        message: "Success",
        updatedData,
      });
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  //show user User
  async getOne(req, res) {
    try {
      let data = await User.findOne({
        where:{
          id: req.user.id,
        }
       
      });
      console.log(data)

      return res.status(200).json({
        message: "Here is your Profile",
        data,

        // return res.status(200).send(data.nama);
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

   //delete user
   async delete(req, res) {
    try {
      // delete data
      await User.destroy({ where: {id: req.user.id} });

      return res.status(200).json({
        message: "Success",
      });
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
  //get All user
  async getAll(req, res) {
    try {
      let data = await User.findAll();

      //if no data
      if (!data.length) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      //if success
      return res.status(200).json({
        message: "success",
        data,
      });
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        message: "internal server error",
        error: e,
      });
    }
  }
}

module.exports = new AuthController();
