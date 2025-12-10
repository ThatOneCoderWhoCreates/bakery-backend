import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email Error:", err);
    res.status(500).json({ success: false });
  }
});

export default router;
