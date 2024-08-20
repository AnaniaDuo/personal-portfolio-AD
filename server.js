const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const router = express.Router();

// server used to send emails
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/index.html"))
// );

const contactEmail = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) console.log("error", error);
  else console.log("ready to send");
});

router.get("/", (req, res) => {
  res.json({ greeting: "Hello" });
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>

    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) res.json(error);
    else res.json({ code: 200, status: "Message Sent" });
  });
});
