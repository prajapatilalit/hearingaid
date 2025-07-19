const transporter = require("../config/mailer");

const sendNewsletterSubscribe = (req, res) => {
  const { subscriberEmail, ownerEmail } = req.body;
  console.log("body", req.body);

  if (!subscriberEmail || !ownerEmail) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Email to the patient: confirmation
  const patientMailOptions = {
    from: `Ellite Listen <${process.env.SENDER_EMAIL}>`,
    to: subscriberEmail,
    subject: "Thank You for Subscribing!",
    text: `Thank you for subscribing to Ellite Listen! We’ll contact you soon.`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="text-align: center;">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAV4CAYAAAD4zRH6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAAX..." alt="Ellite Listen Logo" style="max-width: 150px; margin-bottom: 20px;" />
          </div>

          <h2 style="color: #4CAF50; text-align: center;">You're Subscribed!</h2>
          <p style="font-size: 16px; color: #333;">Thank you for subscribing to <strong>Ellite Listen</strong>. We're thrilled to have you with us!</p>
          <p style="font-size: 16px; color: #333;">Our team will contact you shortly to assist with your hearing care needs.</p>

          <div style="margin-top: 30px; text-align: center;">
            <a href="https://elitelisten.com/#contact" style="text-decoration: none; background-color: #4CAF50; color: #ffffff; padding: 12px 24px; border-radius: 5px; font-size: 16px;">Contact Us</a>
          </div>

          <div style="text-align: center; margin-top: 40px;">
            <a href="https://facebook.com" target="_blank" style="margin: 0 10px;">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" style="margin: 0 10px;">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" />
            </a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" style="margin: 0 10px;">
              <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" />
            </a>
          </div>

          <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;" />

          <p style="font-size: 14px; color: #999; text-align: center;">
            You’re receiving this email because you subscribed on our website.<br/>
            © ${new Date().getFullYear()} Ellite Listen. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };

  // Email to the owner: appointment details
  const ownerMailOptions = {
    from: `Ellite Listen <${process.env.SENDER_EMAIL}>`,
    to: ownerEmail,
    subject: "New Subscriber Notification - Ellite Listen",
    text: `A new user has subscribed on the Ellite Listen website. Please reach out to them soon.`,
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <div style="text-align: center;">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAV4CAYAAAD4zRH6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAAX..." alt="Ellite Listen Logo" style="max-width: 150px; margin-bottom: 20px;" />
            </div>

            <h2 style="color: #2196F3; text-align: center;">New Subscriber Alert</h2>
            <p style="font-size: 16px; color: #333;">Hi Team,</p>
            <p style="font-size: 16px; color: #333;">You have a new subscriber to <strong>Ellite Listen</strong>.</p>
            <p style="font-size: 16px; color: #333;">Please reach out to them shortly for further assistance.</p>

            <table style="width: 100%; margin-top: 20px; font-size: 15px;">
              <tr>
                <td style="padding: 10px; background-color: #f0f0f0; border-radius: 5px;">📧 Subscriber Email:</td>
                <td style="padding: 10px;">${subscriberEmail}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; text-align: center;">
              <a href="https://elitelisten.com/#contact" style="text-decoration: none; background-color: #2196F3; color: #ffffff; padding: 12px 24px; border-radius: 5px; font-size: 16px;">View Contact Page</a>
            </div>

            <div style="text-align: center; margin-top: 40px;">
              <a href="https://facebook.com" target="_blank" style="margin: 0 10px;">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" style="margin: 0 10px;">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" />
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" style="margin: 0 10px;">
                <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" />
              </a>
            </div>

            <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;" />

            <p style="font-size: 14px; color: #999; text-align: center;">
              This is an automated notification from your website.<br/>
              © ${new Date().getFullYear()} Ellite Listen. All rights reserved.
            </p>
          </div>
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

module.exports = { sendNewsletterSubscribe };
