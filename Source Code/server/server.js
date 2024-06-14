const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the email service you want (e.g., 'gmail')
  auth: {
    user: 'akshayajanarthanreddy@gmail.com', // Your email address
    pass: 'AKshaya03@', // Your email password or app-specific password
  },
});

// API endpoint to send feedback email
app.post('/send-feedback', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com', // Recipient's email address
    subject: `Feedback from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending feedback');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Feedback sent successfully');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
