const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  nodemailer = require("nodemailer"),
  cors = require("cors"),
  dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

var transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  authMethod: "PLAIN",
  pool: true,
  poolSize: 3,
  poolMaxMessages: 100,
  disableFileAccess: true,
  disableUrlAccess: true,
  debug: true,
});

transporter.verify((err, success) => {
  if (err) {
    console.error("Error verifying transporter:", err);
  } else {
    console.log("Successfully signed into Elastic Email account", success);
  }
});

app.post("/send", (req, res) => {
  const { name, message, email } = req.body;

  var mail = {
    from: email,
    to: "bennymanfre@gmail.com",
    subject: "Feedback From The Blog",
    html: `${message}` + "<br><br>Kindly,<br>" + `${name}`,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.error("Error sending email:", err);
      res.status(500).json({ success: false, error: err.message });
    } else {
      res.json({
        success: true,
        message: "Email has been sent successfully.",
        data,
      });
    }
  });
});
