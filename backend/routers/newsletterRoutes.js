const express = require("express");
const { sendNewsletterSubscribe } = require("../controllers/newsletterController");

const router = express.Router();

// POST API to book an appointment
router.post("/subscribe", sendNewsletterSubscribe);

module.exports = router;