const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createContact,
  getContacts
} = require("../controllers/contactController");

router.post("/", createContact);
router.get("/", auth, getContacts);

module.exports = router;