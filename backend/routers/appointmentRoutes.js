const express = require("express");
const { sendAppointmentNotification } = require("../controllers/appointmentController");

const router = express.Router();

// POST API to book an appointment
router.post("/appointment", sendAppointmentNotification);

module.exports = router;
