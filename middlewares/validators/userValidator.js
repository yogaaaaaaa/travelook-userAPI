const express = require("express");

const userController = require("../controllers/userController");
const userValidator = require("../middlewares/validators/userValidator");
const auth = require("../middlewares/auth");

const router = express.Router();

const router = express.Router();

router.post(
  "/signup",
  userValidator.signup,
  auth.signup,
  userController.getToken
);
router.post(
  "/signin",
  userValidator.signin,
  auth.signin,
  userController.getToken
);
// router.put("/update/", auth.user, userValidator.update, userController.update);
// router.get("/", auth.user, userController.getOne);
// router.get("/adminpage/", auth.admin, userController.getOne);
// router.get("/profilepage/", auth.user, userController.getOne);
// router.get("/adminpage/users/", auth.admin, userController.getAll);
// router.delete("/delete", auth.user, userController.delete);


module.exports = router;
