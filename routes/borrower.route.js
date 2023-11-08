const express = require("express");
const UserController = require("../controller/borrower.controller");
const {
  createBorrowerValidator,
  updateBorrowerValidator,
  deleteBorrowerValidator,
  checkoutBorrowerValidator,
} = require("../utils/borrower.validator");
const router = express.Router();

router
  .route("/")
  .get(UserController.getAll)
  .post(createBorrowerValidator, UserController.create);

router
  .route("/:id")
  .put(updateBorrowerValidator, UserController.update)
  .delete(deleteBorrowerValidator, UserController.delete);

router
  .route("/checkout")
  .get(UserController.getAllCheckoutController)
  .post(checkoutBorrowerValidator, UserController.checkoutController);

router.route("/return").post(UserController.returnController);

router.route("/books/:id").get(UserController.borrowerHistoryController);

module.exports = router;
