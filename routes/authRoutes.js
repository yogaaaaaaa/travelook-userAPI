const express = require("express");

const authController = require("../controllers/authController");
const authValidator = require("../middlewares/validators/authValidator");
const auth = require("../middlewares/auth");

const { imageUpload } = require("../middlewares/uploads/imageUpload");


const router = express.Router();

router.post(
  "/signup", imageUpload,  authValidator.signup, auth.signup,  authController.getToken
);
router.post(
  "/signin",
  authValidator.signin,
  auth.signin,
  authController.getToken
);
router.put("/update/:id", imageUpload ,authValidator.update, authController.update);
router.get("/", auth.user, authController.getOne);
// router.get("/adminpage/", auth.admin, userController.getOne);
// router.get("/profilepage/", auth.user, userController.getOne);
router.get("/adminpage/users/", auth.admin, authController.getAll);
 router.delete("/delete", auth.user, authController.delete);


module.exports = router;
