const Borrower = require("../models/borrower.model");
const ApiError = require("../utils/apiError");

class UserController {
  static async create(req, res, next) {
    try {
      const newBorrower = await Borrower.createBorrower(req.body);
      res.status(201).json(newBorrower);
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not created. Try again.", 500)
      );
    }
  }

  static async getAll(req, res, next) {
    try {
      const borrowers = await Borrower.getAllBorrowers();
      res.status(200).json(borrowers);
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }

  static async update(req, res, next) {
    try {
      const updatedBorrower = await Borrower.updateBorrower(
        req.body,
        req.params.id
      );
      res.status(200).json(updatedBorrower);
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not updated. Try again.", 500)
      );
    }
  }

  static async delete(req, res, next) {
    try {
      const deletedBorrower = await Borrower.deleteBorrower(req.params.id);
      res.status(200).json(deletedBorrower);
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not deleted. Try again.", 500)
      );
    }
  }

  static async checkoutController(req, res, next) {
    try {
      const updatedBorrower = await Borrower.checkout(
        req.body.book_id,
        req.body.borrower_id
      );
      res.status(200).json({ msg: "Book checked out successfully" });
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not updated. Try again.", 500)
      );
    }
  }

  static async getAllCheckoutController(req, res, next) {
    try {
      const checkout = await Borrower.getAllCheckout();
      res.status(200).json(checkout);
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }

  static async returnController(req, res, next) {
    try {
      const updatedBorrower = await Borrower.returnbooked(
        req.body.book_id,
        req.body.borrower_id
      );
      res.status(200).json({ msg: "Book returned successfully" });
    } catch (error) {
      next(
        new ApiError(error.message || "Borrower not updated. Try again.", 500)
      );
    }
  }

  static async borrowerHistoryController(req, res, next) {
    try {
      const history = await Borrower.borrowerHistory(req.params.id);
      res.status(200).json(history);
    } catch (error) {
      next(new ApiError(error.message, 500));
    }
  }
}

module.exports = UserController;
