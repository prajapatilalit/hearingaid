const transporter = require("../config/mailer");

const sendAppointmentNotification = (req, res) => {
  const { patientName, patientEmail, ownerEmail, typeOfService, mobile } = req.body;
  console.log("body", req.body);


  if (!patientName || !patientEmail || !ownerEmail || !typeOfService || !mobile) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Email to the patient: confirmation
  const patientMailOptions = {
    from: `Ellite Listen <${process.env.SENDER_EMAIL}>`,
    to: patientEmail,
    subject: 'Appointment Confirmation',
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #4CAF50;">Appointment Confirmed!</h2>
          <p>Dear ${patientName},</p>
          <p>Your appointment is confirmed. Here are the details:</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Patient Name:</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${patientName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Email:</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${patientEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Mobile:</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${mobile}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Service:</td>
              <td style="padding: 10px; border: 1px solid #e0e0e0;">${typeOfService}</td>
            </tr>
          </table>
          <p style="margin-top: 20px;">Thank you for scheduling your appointment. We look forward to seeing you!</p>
          <p>Best regards,<br>Your Clinic</p>
        </div>
    `,
  };

  // Email to the owner: appointment details
  const ownerMailOptions = {
    from: `Ellite Listen <${process.env.SENDER_EMAIL}>`,
    to: ownerEmail,
    subject: 'New Appointment Details',
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #2196F3;">New Appointment Scheduled</h2>
            <p>Dear Owner,</p>
            <p>A new appointment has been scheduled. Here are the details:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Patient Name:</td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${patientName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Patient Email:</td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${patientEmail}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Mobile:</td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${mobile}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e0e0e0; background-color: #f9f9f9;">Service:</td>
                <td style="padding: 10px; border: 1px solid #e0e0e0;">${typeOfService}</td>
              </tr>
            </table>
            <p style="margin-top: 20px;">Please ensure everything is ready for the appointment.</p>
            <p>Best regards,<br>Your Clinic</p>
        </div>
    `,
  };

  // Send email to the patient
  transporter.sendMail(patientMailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email to patient:", error);
    } else {
      console.log("Patient email sent: " + info.response);
    }
  });

  // Send email to the owner
  transporter.sendMail(ownerMailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email to owner:", error);
    } else {
      console.log("Owner email sent: " + info.response);
    }
  });

  res.status(200).json({ message: "Appointment booked, notifications sent!" });
};

module.exports = { sendAppointmentNotification };
